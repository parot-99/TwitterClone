from django.urls import path, include
from .api.api_views import (
    profile_update_view,
    password_update_view,
    email_update_view,
    profile_delete_view
)

urlpatterns = [
   path(
        'update/profile/',
        profile_update_view, 
        name='update-profile'
    ),
    path(
        'update/password/',
        password_update_view, 
        name='update-password'
    ),
    path(
        'update/email/',
        email_update_view, 
        name='update-email'
    ),
    path(
        'delete/profile/',
        profile_delete_view, 
        name='delete-profile'
    ),
]

