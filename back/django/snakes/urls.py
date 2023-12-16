from django.urls import path

from .views import snake_info

from .views import SnakeInfo

urlpatterns = [
    path('with_django/', snake_info, name='snake_info'),

    path('with_drf/', SnakeInfo.as_view(), name='snake_info'),
]
