from flask import Blueprint, request, jsonify
from app import db
from app.models.user import User
from app.models.storyquest import StoryQuest, StoryQuestProgress

# Define the blueprint
storyquest_bp = Blueprint("storyquest", __name__)

# ========================
# GET all StoryQuests
# ========================
@storyquest_bp.route("/storyquests", methods=["GET"])
def get_storyquests():
    quests = StoryQuest.query.all()
    return jsonify([{
        "id": q.id,
        "title": q.title,
        "description": q.description,
        "difficulty": q.difficulty,
        "xp_reward": q.xp_reward
    } for q in quests])

# ========================
# POST new StoryQuest
# ========================
@storyquest_bp.route("/storyquests", methods=["POST"])
def add_storyquest():
    data = request.json
    quest = StoryQuest(
        title=data["title"],
        description=data["description"],
        difficulty=data["difficulty"],
        xp_reward=data.get("xp_reward", 20)
    )
    db.session.add(quest)
    db.session.commit()
    return jsonify({"message": f"StoryQuest '{quest.title}' added!"})

# ========================
# POST complete StoryQuest
# ========================
@storyquest_bp.route("/storyquests/<int:quest_id>/complete", methods=["POST"])
def complete_storyquest(quest_id):
    user_id = request.json.get("user_id")
    user = User.query.get(user_id)
    quest = StoryQuest.query.get(quest_id)

    if not user or not quest:
        return jsonify({"message": "User or StoryQuest not found"}), 404

    # Add XP and level-up
    user.xp += quest.xp_reward
    while user.xp >= user.level * 100:
        user.level += 1

    # Mark as completed
    progress = StoryQuestProgress(user_id=user.id, storyquest_id=quest.id, completed=True)
    db.session.add(progress)
    db.session.commit()

    return jsonify({
        "message": f"StoryQuest '{quest.title}' completed!",
        "xp": user.xp,
        "level": user.level
    })