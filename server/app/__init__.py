from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from .config import Config

# Initialize extensions
db = SQLAlchemy()
bcrypt = Bcrypt()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions with app
    db.init_app(app)
    bcrypt.init_app(app)
    CORS(app)

    # Simple home route
    @app.route("/")
    def home():
        return "Codezenia Backend Running"

    # Import blueprints
    from .routes.auth import auth_bp
    from .routes.games import games_bp
    from .routes.storyquest import storyquest_bp

    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix="/auth")      # /auth routes
    app.register_blueprint(games_bp, url_prefix="/api")      # /api/games routes
    app.register_blueprint(storyquest_bp, url_prefix="/api") # /api/storyquests routes

    return app