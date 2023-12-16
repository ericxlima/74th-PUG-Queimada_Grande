from fastapi import FastAPI

app = FastAPI()


@app.get("/fastapi-api/")
def get_cobra():
    data = [
        {
            "nome": "Jararaca Ilhoa",
            "imagem": "./assets/ilhoa.jpg",
            "descricao": "Única",
            "origin": "Vim pelo FastAPI",
        },
    ]
    return data
