from flask import Flask
from examplefunc import *

app = Flask(__name__)

@app.route("/")
def hello_world():
    return examplefunc()