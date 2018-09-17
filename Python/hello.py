from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

if (__name__ == "__main__"): #comparing with main function
    app.run(port = 5000)
