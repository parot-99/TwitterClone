from django.contrib.auth.models import User
from rest_framework import serializers
from profiles.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    tweets_count = serializers.SerializerMethodField(read_only=True)
  
    class Meta:
        model = Profile
        fields = [
            'bio',
            'name',
            'birthday',
            'profile_pic',
            'tweets_count',
        ]

    def get_tweets_count(self, obj):
        return obj.user.user_tweets.count()


class UserSerializer(serializers.ModelSerializer):
    is_current_user = serializers.SerializerMethodField(read_only=True) 
    date_joined = serializers.DateTimeField(read_only=True, format='%B %Y')

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'is_current_user',
            'date_joined',
        ]

    def get_is_current_user(self, obj):
        return False

    def get_date_joined(self, obj):
        return obj.date_joined


class CurrentUserSerializer(serializers.ModelSerializer):
    is_current_user = serializers.SerializerMethodField(read_only=True)
    date_joined = serializers.DateTimeField(read_only=True, format='%B %Y')
  
    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
            'is_current_user',
            'date_joined',
        ]

    def get_is_current_user(self, obj):
        return True


    def get_date_joined(self, obj):
        return obj.date_joined