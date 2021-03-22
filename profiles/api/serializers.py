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


class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'bio',
            'name',
            'birthday',
        ]


class ProfileImageUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'bio',
            'name',
            'birthday',
            'profile_pic'
        ]



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



class FollowingSerializer(serializers.ModelSerializer):
    follow_list = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Profile
        fields = [
            'follow_list'
        ]

    def get_follow_list(self, obj):
        following_list = [
            following.user.username for following in obj.following.all()
        ]

        return following_list


class FollowersSerializer(serializers.ModelSerializer):
    follow_list = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Profile
        fields = [
            'follow_list'
        ]

    def get_follow_list(self, obj):
        followers_list = [
            followers.user.username for followers in obj.followers.all()
        ]

        return followers_list

