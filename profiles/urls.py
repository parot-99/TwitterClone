from django.urls import path, include
from .api.api_views import user_detail_view

urlpatterns = [
    path('<str:username>/', user_detail_view, name='user-detail'),
]

