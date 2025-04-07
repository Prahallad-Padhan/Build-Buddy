from flask import Flask, request, jsonify
from flask_cors import CORS
from ideas_generator import generate_ideas

app = Flask(__name__)
CORS(app)  # Allow React frontend access

@app.route("/generate", methods=["POST"])
def get_ideas():
    data = request.json
    interest = data.get("interest")
    level = data.get("level")
    ideas = generate_ideas(interest, level)
    return jsonify(ideas)

if __name__ == "__main__":
    app.run(debug=True)
