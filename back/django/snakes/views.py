from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from django.views.decorators.http import require_GET
from django.shortcuts import render


@require_GET
def snake_info(request):
    snake_data = [
        {
            "nome": "Pitón",
            "imagem": "./assets/piton.jpg",
            "descricao": "Nova espécie",
            "origin": "Vim pelo Django",
        }
    ]
    return JsonResponse(snake_data, safe=False)


# -------------------------------------------------------------


class SnakeInfo(APIView):
    def get(self, request):
        snake_data = [
            {
                "nome": "Pitón",
                "imagem": "./assets/piton.jpg",
                "descricao": "Nova espécie",
                "origin": "Vim pelo DRF",
            }
        ]
        return Response(snake_data)
