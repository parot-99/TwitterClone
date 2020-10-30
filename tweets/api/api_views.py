from random import randint
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from tweets.models import Tweet
from .serializers import TweetSerializer, TweetCreateSerializer


@api_view(['POST'])
def tweet_create_view(request):
    serializer = TweetCreateSerializer(data=request.data)
  
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response({}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def retweet_create_view(request, tweet_id):
    tweet = Tweet.objects.filter(id=tweet_id)
    retweet_content = request.data['content']

    if not tweet.exists():
        return Response({}, status=status.HTTP_404_NOT_FOUND)

    parent = tweet.first()
    retweet = Tweet.objects.create(
        user=request.user,
        retweet=parent,
        content=retweet_content
    )

    return Response({}, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def tweet_list_view(request):
    following = request.user.profile.following.all()
    following_list = list(map(
        lambda profile: profile.user.username, 
        following
    ))
    following_list += [request.user.username]

    tweets = Tweet.objects.filter(user__username__in=following_list).order_by('-date_created')[:50]
    serializer = TweetSerializer(tweets, many=True)

    for data, tweet in zip(serializer.data, tweets) :
        data['isLiked'] =  request.user in tweet.likes.all()
        
    return Response(serializer.data)


@api_view(['GET'])
def tweet_detail_view(request, tweet_id):
    tweet = get_object_or_404(Tweet, pk=tweet_id)
    serializer = TweetSerializer(tweet)
    new_serializer_data = serializer.data
    new_serializer_data['isLiked'] =  request.user in tweet.likes.all()

    return Response(new_serializer_data, status=status.HTTP_200_OK)



@api_view(['POST'])
def tweet_like_view(request, tweet_id):
    tweet = Tweet.objects.filter(id=tweet_id)

    if not tweet.exists():
        return Response({}, status=status.HTTP_404_NOT_FOUND)

    tweet = tweet.first()

    if request.user in tweet.likes.all():
        tweet.likes.remove(request.user)
        res_type = 'unlike'

    else:
        tweet.likes.add(request.user)
        res_type = 'like'

    return Response({'type': res_type}, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def tweet_delete_view(request, tweet_id):
    tweet = Tweet.objects.filter(id=tweet_id)
    if not tweet.exists():
        return Response({}, status=status.HTTP_404_NOT_FOUND)

    tweet = tweet.filter(user=request.user)

    if not tweet.exists():
        return Response({}, status=status.HTTP_401_UNAUTHORIZED)

    tweet.delete()

    return Response({}, status=status.HTTP_200_OK)









