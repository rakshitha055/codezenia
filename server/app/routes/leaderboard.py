from app.models.user import User
from flask import Blueprint, jsonify

leaderboard_bp = Blueprint("leaderboard", __name__)

@leaderboard_bp.route("/leaderboard", methods=["GET"])
def leaderboard():
    users = User.query.order_by(User.xp.desc()).limit(10).all()
    return jsonify([{"username": u.username, "xp": u.xp, "level": u.level} for u in users])