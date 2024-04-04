from flask import Flask, jsonify, request, make_response
from service.track_service import track_service
from service import util
import json
import requests
import time

app = Flask(__name__)
app.config.from_object('config.devConfig')


@app.route("/api/flask/track", methods=['POST'])
def track_request():
    args_dict = request.get_json()
    instance = track_service()
    source = args_dict.get('url')
    game_id = args_dict.get('game_id')
    start = time.time()
    if source is None or game_id is None:
        return make_response("bad req", 400)
    else:
        result = instance.get_result(source)
        result.update({'game_id': game_id})

    with open('response.txt', 'w') as response:
        response.write(json.dumps(result))

    util.delete_videos('./service/video/')
    end = time.time()

    print((end - start) / 60)

    filename = source.split('/')[-1]
    file = open('./service/image/' + filename + '.png', 'rb')

    requests.post('https://j10c201.p.ssafy.io/api/social/game/boximage', files={'id':game_id,'files':file})
    requests.post('https://j10c201.p.ssafy.io/api/calc/gamedata', json=result)
    util.delete_videos('./service/image/')
    return make_response(jsonify(result), 200)


if __name__ == '__main__':
    app.run('0.0.0.0', port=8090, debug=True)

