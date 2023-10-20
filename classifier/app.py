from flask import Flask, request, jsonify
from flask_cors import CORS
from examplefunc import *

app = Flask(__name__)
CORS(app)

@app.route("/set", methods=['POST'])
def set():
    input = request.get_json()
    #return jsonify({"message": "Data received", "data": input_json})
    return examplefunc(input["x1"], input["x2"], input["y1"], input["y2"],
                       input["imgname"])

@app.route("/data", methods=['GET'])
def get_data():
    return "<p>Hello world!</p>"
    #return examplefunc()