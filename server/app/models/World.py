from app import db

class World(db.Model):
    __tablename__ = "worlds"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text)
    order = db.Column(db.Integer, default=1)  # only one world now
    quests = db.relationship("Quest", backref="world", lazy=True)