from random import randint
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated 
from rest_framework.response import Response
from rest_framework.decorators import(
    api_view, 
    permission_classes, 
    authentication_classes
)
from tweets.models import Tweet
from .serializers import TweetSerializer, TweetCreateSerializer


@api_view(['POST'])
@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def tweet_create_view(request):
    serializer = TweetCreateSerializer(data=request.POST)

    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response({}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def tweet_delete_view(request, tweet_id):
    tweet = Tweet.objects.filter(id=tweet_id)
    if not tweet.exists():
        return Response({}, status=status.HTTP_404_NOT_FOUND)

    tweet = tweet.filter(user=request.user)

    if not tweet.exists():
        return Response({}, status=status.HTTP_401_UNAUTHORIZED)

    tweet.delete()

    return Response({}, status=status.HTTP_200_OK)


@api_view(['GET'])
def tweet_list_view(request):
    tweets = Tweet.objects.all().order_by('-date_created')
    serializer = TweetSerializer(tweets, many=True)
    
    return Response(serializer.data)


@api_view(['GET'])
def tweet_detail_view(request, tweet_id):
    tweet = get_object_or_404(Tweet, pk=tweet_id)
    serializer = TweetSerializer(tweet)

    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def tweet_like_view(request, tweet_id):
    tweet = Tweet.objects.filter(id=tweet_id)

    if not tweet.exists():
        return Response({}, status=status.HTTP_404_NOT_FOUND)

    tweet = tweet.first()

    if request.user in tweet.likes.all():
        tweet.likes.remove(request.user)

    else:
        tweet.likes.add(request.user)

    return Response({}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def tweet_retweet_view(request, tweet_id):
    tweet = Tweet.objects.filter(id=tweet_id)

    if not tweet.exists():
        return Response({}, status=status.HTTP_404_NOT_FOUND)

    parent = tweet.first()
    retweet = Tweet.objects.create(user=request.user, retweet=parent)

    return Response({}, status=status.HTTP_200_OK)



