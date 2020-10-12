from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from .api.api_views import current_user, create_user


urlpatterns = [
    path('token-auth/', obtain_jwt_token), 
    path('current_user/', current_user, name='current-user'),
    path('create_user/', create_user, name='create-user')
]

