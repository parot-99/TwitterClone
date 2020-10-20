from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password

class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password',
            'password2',
            'first_name',
            'last_name'
        ]

    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        password2 = validated_data['password2']
        first_name = validated_data['first_name']
        last_name = validated_data['last_name']

        try:
            validate_password(password)
      
        except:
            raise serializers.ValidationError({'password': 'password is weak'})

        if (email and User.objects.filter(email=email).exclude(username=username).exists()):
            raise serializers.ValidationError(
                {'email': 'Email addresses must be unique.'})

        if password != password2:
            raise serializers.ValidationError({'password': 'Password must match'})


        user = User(
            username=username, 
            email=email,
            first_name=first_name,
            last_name=last_name    
        )
        user.set_password(password)
        user.save()

        return user