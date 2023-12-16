from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/flask-api/", methods=["GET"])
def hello_world():
    data = [
        {
            "nome": "Jararaca Dormideira",
            "imagem": "./assets/dormideira.JPG",
            "descricao": "Existe em outros lugares",
            "origin": "Vim pelo FLASK"
        },
    ]
    return jsonify(data)
