from django.urls import path, include
from .api.api_views import user_detail_view, current_user_view

urlpatterns = [
    path('<str:username>/', user_detail_view, name='user-detail'),
    path('current/user/', current_user_view, name='current-user')
]

