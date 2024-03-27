from flask import Flask, jsonify, request, make_response
import time

app = Flask(__name__)

@app.route("/track", methods=['POST'])
def track_request():
    args_dict = request.form.to_dict()
    time.sleep(100)
    source = args_dict.get('url')
    source = args_dict.get('game_id')
    return make_response(jsonify(args_dict),200)


if __name__ == '__main__':
    app.run(debug=True)