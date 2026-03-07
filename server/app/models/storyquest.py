from app import db

class StoryQuest(db.Model):
    __tablename__ = "storyquests"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    difficulty = db.Column(db.String(50), nullable=False)
    xp_reward = db.Column(db.Integer, default=20)

class StoryQuestProgress(db.Model):
    __tablename__ = "storyquest_progress"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    storyquest_id = db.Column(db.Integer, db.ForeignKey("storyquests.id"), nullable=False)
    completed = db.Column(db.Boolean, default=False)