from flask import Flask, request, jsonify
from flask_cors import CORS
from classify_input import *

app = Flask(__name__)
CORS(app)

@app.route("/classify", methods=['POST'])
def classify():
    input = request.get_json()
    #return jsonify({"message": "Data received", "data": input_json})
    return classify_input(input["x1"], input["x2"], input["y1"], input["y2"],
                       input["imgname"], input["model"])

@app.route("/data", methods=['GET'])
def get_data():
    return "<p>Hello world!</p>"
    #return examplefunc()