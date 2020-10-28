from django.urls import path, include
from knox.views import LogoutView, LogoutAllView
from .api.api_views import LoginView, user_create_view, confirm_password

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('logoutall/', LogoutAllView.as_view(), name='logout-all'),
    path('register/', user_create_view, name='register'),
    path('confirmpassword/', confirm_password, name='confirm-password')
]

