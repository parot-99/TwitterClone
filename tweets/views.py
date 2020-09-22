from random import randint
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from .models import Tweet


def home_view(request):
    context = {

    }

    return  render(request, 'tweets/home.html', context=context)


def tweet_list_view(request):
    tweets = Tweet.objects.all()
    tweets = [{'id': tweet.id, 'content': tweet.content, 'likes': randint(0, 250)} for tweet in tweets]

    data = {
        'response': tweets
    }

    return JsonResponse(data)


def tweet_detail_view(request, tweet_id, *args, **kwargs):
    tweet = get_object_or_404(Tweet, pk=tweet_id)

    data = {
        'id': tweet_id, 
        'content': tweet.content, 
        'likes': randint(0, 2500)
    }

    return JsonResponse(data)