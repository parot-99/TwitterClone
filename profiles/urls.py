from django.urls import path, include
from .api.api_views import (
    user_detail_view,
    current_user_view,
    user_follow_view,
    profile_list_view
)

urlpatterns = [
    path('current/user/', current_user_view, name='current-user'),
    path('<str:username>/', user_detail_view, name='user-detail'),
    path('<str:username>/follow/', user_follow_view, name='follow-user'),
    path('', profile_list_view, name='user-list'),
]

