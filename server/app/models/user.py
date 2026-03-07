from app import db
from flask_bcrypt import generate_password_hash

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

    # ✅ XP System fields
    xp = db.Column(db.Integer, default=0)
    level = db.Column(db.Integer, default=1)

    def __repr__(self):
        return f"<User {self.username}>"