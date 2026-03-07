from flask import Blueprint, request, jsonify
from app import db
from app.models.user import User
from app.models.games import Game
# from flask_jwt_extended import get_jwt_identity  # Uncomment if using JWT

games_bp = Blueprint("games", __name__)

# ========================
# GET all games
# ========================
@games_bp.route("/games", methods=["GET"])
def get_games():
    games = Game.query.all()
    games_list = [
        {
            "id": g.id,
            "title": g.title,
            "description": g.description,
            "difficulty": g.difficulty,
            "xp_reward": g.xp_reward
        } for g in games
    ]
    return jsonify(games_list)


# ========================
# POST new game
# ========================
@games_bp.route("/games", methods=["POST"])
def add_game():
    data = request.json
    game = Game(
        title=data["title"],
        description=data["description"],
        difficulty=data["difficulty"],
        xp_reward=data.get("xp_reward", 10)
    )
    db.session.add(game)
    db.session.commit()
    return jsonify({"message": f"Game '{game.title}' added successfully!"})


# ========================
# POST complete game (XP & Level)
# ========================
@games_bp.route("/games/<int:game_id>/complete", methods=["POST"])
def complete_game(game_id):
    user_id = request.json.get("user_id")  # User ID from request body
    user = User.query.get(user_id)
    game = Game.query.get(game_id)

    if not user or not game:
        return jsonify({"message": "User or Game not found"}), 404

    # Add XP
    user.xp += game.xp_reward

    # Level-up logic: every 100 XP = 1 level
    while user.xp >= user.level * 100:
        user.level += 1

    db.session.commit()

    return jsonify({
        "message": f"Game '{game.title}' completed!",
        "xp": user.xp,
        "level": user.level
    })