from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from django.db.models import Q
from django.contrib.auth.password_validation import (
    validate_password,
    ValidationError
)
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import (
    UserSerializer,
    CurrentUserSerializer,
    ProfileSerializer,
    UsersSerializer,
    FollowingSerializer,
    FollowersSerializer
)
from profiles.models import Profile, FollowingRelation
from tweets.models import Tweet
from tweets.api.serializers import TweetSerializer


@api_view(['GET'])
def user_detail_view(request, username):
    user = get_object_or_404(User, username=username)
    tweets = Tweet.objects.filter(user=user.id).order_by('-date_created')
   
    user_serializer = UserSerializer(user, context={'request': request})
    profile_serializer = ProfileSerializer(user.profile)
    tweets_serializer = TweetSerializer(tweets, many=True)

    if request.user.username == username:
        user_serializer = CurrentUserSerializer(user)

    response_data = {
        'user_data':user_serializer.data,
        'profile_data': profile_serializer.data,
        'tweets_data': tweets_serializer.data
    }

    for data, tweet in zip(tweets_serializer.data, tweets) :
        data['isLiked'] =  request.user in tweet.likes.all()
    
    return Response(response_data, status=status.HTTP_200_OK)


@api_view(['POST'])
def profile_list_view(request):
    username = request.data['username']
    users = User.objects.all()
    accepted_users = []


    for user in users:
        if username in user.username and username != '':
            accepted_users.append(user)


    serializer = UsersSerializer(accepted_users, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def current_user_view(request):
    return Response(
        {'username': request.user.username}, 
        status=status.HTTP_200_OK
    )


@api_view(['POST'])
def user_follow_view(request, username):
    from_profile = request.user.profile  
    to_profile = Profile.objects.get(user__username=username)
    following = from_profile.following.all()
    followed = True if to_profile in following else False

    if followed:
        from_profile.following.remove(to_profile)

        return Response({'message': 'unfollowed'}, status=status.HTTP_200_OK)

    else:
        from_profile.following.add(to_profile)

        return Response({'message': 'followed'}, status=status.HTTP_200_OK)


@api_view(['GET'])
def following_list_view(request, username):
    profile = Profile.objects.get(user__username=username)
    serializer = FollowingSerializer(profile)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def followers_list_view(request, username):
    profile = Profile.objects.get(user__username=username)
    serializer = FollowersSerializer(profile)

    return Response(serializer.data, status=status.HTTP_200_OK)





    
    
   

       






     