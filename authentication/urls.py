from django.urls import path, include
from .api.api_views import (
    user_create_view,
    confirm_password,
    session_login_view,
    session_logout_view,
    is_authenticated_view
)

urlpatterns = [
    path('login/', session_login_view, name='session-login'),
    path('logout/', session_logout_view, name='session-logout'),
    path('register/', user_create_view, name='register'),
    path('confirmpassword/', confirm_password, name='confirm-password'),
    path('authenticated/', is_authenticated_view, name='is-authenticated'),
]

