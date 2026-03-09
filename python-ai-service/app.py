from flask import Flask,request,jsonify
print("flask app starting")
app=Flask(__name__)

@app.route("/analyze",methods=["POST"])
def analyze():

    code=request.json.get["code"]

    score=len(code)

    return jsonify({
        "result":f"Code length score: {score}"
    })

if __name__=="__main__":
    app.run(port=5000)