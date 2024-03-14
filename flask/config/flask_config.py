import os
from dotenv import load_dotenv

load_dotenv(verbose=True)

class Config(object):
    ENV = os.getenv('ENV')
    CSRF_ENABLED = True
    SECRET_KEY = os.getenv('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class devConfig(Config):
    pass

class prodConfig(Config):
    pass