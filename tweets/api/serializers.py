from rest_framework import serializers
from django.conf import settings
from tweets.models import Tweet
from profiles.api.serializers import UserSerializer
from django.contrib.auth.models import User
from datetime import datetime


class TweetCreateSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)
    profile_pic = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Tweet
        fields = [
            'id',
            'user',
            'content',
            'likes',
            'profile_pic' ,
        ]
    
    def validate_content(self, value):
        if len(value) > settings.MAX_TWEET_LENGTH:
            raise  serializers.ValidationError('This tweet is too long')

        return value

    def get_likes(self, obj):
        return obj.likes.count()

    def get_user(self, obj):
        user = User.objects.get(id=obj.user.id)
        
        return UserSerializer(user).data

    def get_profile_pic(self, obj):
        user = User.objects.get(id=obj.user.id)

        return user.profile.profile_pic.url


class TweetSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)
    retweet = TweetCreateSerializer(read_only=True)
    profile_pic = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Tweet
        fields = [
            'id',
            'content', 
            'likes',
            'is_retweet',
            'retweet',
            'user',
            'profile_pic',
        ]

    def get_likes(self, obj):
        return obj.likes.count()

    def get_user(self, obj):
        user = User.objects.get(id=obj.user.id)
        
        return UserSerializer(user).data

    def get_profile_pic(self, obj):
        user = User.objects.get(id=obj.user.id)

        return user.profile.profile_pic.url
