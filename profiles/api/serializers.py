from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    is_current_user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'is_current_user'
        ]

    def get_is_current_user(self, obj):
        return False

class CurrentUserSerializer(serializers.ModelSerializer):
    is_current_user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
            'is_current_user'
        ]

    def get_is_current_user(self, obj):
        return True