from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, CurrentUserSerializer
from tweets.models import Tweet
from tweets.api.serializers import TweetSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_detail_view(request, username):
    user = get_object_or_404(User, username=username)
    tweets = Tweet.objects.filter(user=user.id).order_by('-date_created')

    user_serializer = UserSerializer(user)
    tweets_serializer = TweetSerializer(tweets, many=True)

    if request.user.username == username:
        user_serializer = CurrentUserSerializer(user)

    response_data = {
        'user_data':user_serializer.data,
        'tweets_data': tweets_serializer.data
    }
    
    return Response(response_data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def current_user_view(request):
    return Response(
        {'username': request.user.username}, 
        status=status.HTTP_200_OK
    )
