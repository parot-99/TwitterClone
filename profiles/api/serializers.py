from django.contrib.auth.models import User
from rest_framework import serializers
from profiles.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    tweets_count = serializers.SerializerMethodField(read_only=True)
    following_count = serializers.SerializerMethodField(read_only=True)
    followers_count = serializers.SerializerMethodField(read_only=True)
  
    class Meta:
        model = Profile
        fields = [
            'bio',
            'name',
            'birthday',
            'profile_pic',
            'tweets_count',
            'following_count',
            'followers_count',
        ]

    def get_tweets_count(self, obj):
        return obj.user.user_tweets.count()

    def get_following_count(self, obj):
        return obj.following.count()

    def get_followers_count(self, obj):
        return obj.followers.count()

class UserSerializer(serializers.ModelSerializer):
    is_current_user = serializers.SerializerMethodField(read_only=True) 
    is_followed = serializers.SerializerMethodField(read_only=True)
    date_joined = serializers.DateTimeField(read_only=True, format='%B %Y')
    

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'is_current_user',
            'date_joined',
            'is_followed',
        ]

    def get_is_current_user(self, obj):
        return False

    def get_date_joined(self, obj):
        return obj.date_joined

    def get_is_followed(self, obj):
        following = self.context.get('request').user.profile.following.all()
    

        return obj.profile in following


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
        ]

 
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


