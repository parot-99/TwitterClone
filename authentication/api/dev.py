from django.contrib.auth.models import User
from rest_framework import authentication

class DevAuthentication(authentication.BasicAuthentication):
    def authenticate(self, request):
        user = User.objects.get(username='ahmed')

        return (user, None)