from flask import jsonify, request, Blueprint, app
from service import track_service

router = Blueprint('route', __name__)

@app.route("/track", methods=['POST'])
def first_route():
    source = request.args.get('url')
    game_id = request.args.get('game_id')

    return