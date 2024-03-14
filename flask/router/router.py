from flask import jsonify, request, Blueprint

router = Blueprint('route', __name__)

@router.route("/router", methods=['GET'])
def first_route():
    msg = {
        "page": "first",
        "method":"GET"
    }
    return jsonify(msg)