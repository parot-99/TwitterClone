from random import randint
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.urls import reverse
from .models import Tweet
from .forms import TweetCreateForm


def home_view(request):
    form = TweetCreateForm()

    if request.method == 'POST':
        form = TweetCreateForm(request.POST)

        if form.is_valid():
            form.save()

        return redirect(reverse('home'))

    context = {
        'form': form
    }

    return  render(request, 'tweets/home.html', context=context)


def tweet_list_view(request):
    tweets = Tweet.objects.all().order_by('-date_created')
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