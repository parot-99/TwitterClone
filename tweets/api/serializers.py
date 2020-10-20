from rest_framework import serializers
from django.conf import settings
from tweets.models import Tweet
from profiles.api.serializers import UserSerializer
from django.contrib.auth.models import User


class TweetCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = [
            'id',
            'content',
            'likes'     
        ]
    
    def validate_content(self, value):
        if len(value) > settings.MAX_TWEET_LENGTH:
            raise  serializers.ValidationError('This tweet is too long')

        return value


class TweetSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)
    retweet = TweetCreateSerializer(read_only=True)
    
    class Meta:
        model = Tweet
        fields = [
            'id',
            'content', 
            'likes',
            'is_retweet',
            'retweet',
            'user'
        ]

    def get_likes(self, obj):
        return obj.likes.count()

    def get_user(self, obj):
        user = User.objects.get(id=obj.user.id)
        return UserSerializer(user).data
  
