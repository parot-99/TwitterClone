from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, CurrentUserSerializer


@api_view(['GET'])
def user_detail_view(request, username):
    user = get_object_or_404(User, username=username)
    serializer = UserSerializer(user)

    if request.user.username == username:
        serializer = CurrentUserSerializer(user)

    return Response(serializer.data, status=status.HTTP_200_OK)
