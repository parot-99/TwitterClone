from rest_framework import serializers
from django.conf import settings
from tweets.models import Tweet
from django.contrib.auth.models import User
from datetime import datetime


class TweetCreateSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    username = serializers.SerializerMethodField(read_only=True)
    name = serializers.SerializerMethodField(read_only=True)
    profile_pic = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Tweet
        fields = [
            'id',
            'username',
            'name',
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

    def get_username(self, obj):
        user = User.objects.get(id=obj.user.id)
        
        return user.username

    def get_name(self, obj):
        user = User.objects.get(id=obj.user.id)
        
        return user.profile.name

    def get_profile_pic(self, obj):
        user = User.objects.get(id=obj.user.id)

        return user.profile.profile_pic.url


class TweetSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    username = serializers.SerializerMethodField(read_only=True)
    name = serializers.SerializerMethodField(read_only=True)
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
            'username',
            'name',
            'profile_pic',
        ]

    def get_likes(self, obj):
        return obj.likes.count()

    def get_username(self, obj):
        user = User.objects.get(id=obj.user.id)
        
        return user.username

    def get_name(self, obj):
        user = User.objects.get(id=obj.user.id)
        
        return user.profile.name

    def get_profile_pic(self, obj):
        user = User.objects.get(id=obj.user.id)

        return user.profile.profile_pic.url
