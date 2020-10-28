from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from profiles.models import Profile

class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(write_only=True, required=True)
    name = serializers.CharField(write_only=True, required=True, max_length=50)

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password',
            'password2',
            'name'
        ]

    def create(self, validated_data):
        username = validated_data.get('username')
        email = validated_data.get('email')
        password = validated_data.get('password')
        password2 = validated_data.get('password2')
        name = validated_data.get('name')

        try:
            validate_password(password)
      
        except:
            raise serializers.ValidationError({'message': 'password is weak'})

        if (email and User.objects.filter(email=email).exclude(username=username).exists()):
            raise serializers.ValidationError(
                {'message': 'Email address must be unique.'}
            )

        if password != password2:
            raise serializers.ValidationError({'message': 'Passwords must match'})

        user = User(username=username, email=email)
        user.set_password(password)
        user.save()

        profile = Profile.objects.get(user=user.id)
        setattr(profile, 'name', name)
        profile.save()

        return user