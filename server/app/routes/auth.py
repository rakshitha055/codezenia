from flask import Blueprint, request, jsonify
from app import db, bcrypt
from app.models.user import User

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():

    data = request.json

    hashed_pw = bcrypt.generate_password_hash(data["password"]).decode("utf-8")

    user = User(
        username=data["username"],
        email=data["email"],
        password=hashed_pw
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "Welcome to Codezenia"})

@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.json

    user = User.query.filter_by(email=data["email"]).first()

    if user and bcrypt.check_password_hash(user.password, data["password"]):

        return jsonify({
            "message": "Login successful",
            "username": user.username,
            "xp": user.xp,
            "level": user.level
        })

    return jsonify({"message": "Invalid credentials"}), 401



@auth_bp.route("/add-xp/<int:user_id>", methods=["POST"])
def add_xp(user_id):

    user = User.query.get(user_id)

    if not user:
        return jsonify({"message": "User not found"}), 404

    user.xp += 50

    if user.xp >= 100:
        user.level += 1
        user.xp = 0

    db.session.commit()

    return jsonify({
        "message": "XP added",
        "xp": user.xp,
        "level": user.level
    })


@auth_bp.route("/leaderboard", methods=["GET"])
def leaderboard():

    users = User.query.order_by(User.level.desc(), User.xp.desc()).limit(10).all()

    result = []

    for u in users:
        result.append({
            "username": u.username,
            "level": u.level,
            "xp": u.xp
        })

    return jsonify(result)