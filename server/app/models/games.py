from app import db

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    difficulty = db.Column(db.String(20), nullable=False)  # e.g., easy, medium, hard
    xp_reward = db.Column(db.Integer, default=10)

    def __repr__(self):
        return f"<Game {self.title}>"