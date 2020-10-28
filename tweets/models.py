from django.db import models
from django.contrib.auth.models import User


class TweetLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tweet = models.ForeignKey('Tweet', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)


class Tweet(models.Model):
    retweet = models.ForeignKey(
        'self', 
        blank=True, 
        null=True, 
        on_delete=models.SET_NULL
    )
    user = models.ForeignKey(User, models.CASCADE, related_name='tweets')
    content = models.CharField(max_length=240 ,blank=True, null =True)
    likes = models.ManyToManyField(
        User, 
        related_name='tweet_user', 
        blank=True, 
        through=TweetLike
    )
    date_created = models.DateTimeField(auto_now_add=True)
    image = models.FileField(
        upload_to='tweet_pics', 
        blank=True, 
        null=True
    )
 
    @property
    def is_retweet(self):
        return self.retweet != None
    
    def __str__(self):
        return f'Tweet #{self.id}'


