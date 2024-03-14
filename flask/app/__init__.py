from flask import Flask, jsonfy
from config import flask_config
from router import router

def register_router(flask_app: Flask):

    from router.router import router

    @flask_app.before_request
    def before_request():
        pass
        return

    @flask_app.after_request
    def after_request(res):
        print("after request", res.status_code)
        return res

def create_app():
    app = Flask(__name__)
    app.config.from_object((get_flask_env()))
    # app.config.from_envvar()
    register_router(app)
    return app

def get_flask_env():
    if(flask_config.Config.ENV == 'prod'):
        return 'config.flask_config.prodConfig'
    elif (flask_config.Config.ENV == 'dev'):
        return 'config.flask_config.devConfig'

