from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password

class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)
    first_name = serializers.CharField(write_only=True, required=False)
    last_name = serializers.CharField(write_only=True, required=False)

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
        username = validated_data.get('username')
        email = validated_data.get('email')
        password = validated_data.get('password')
        password2 = validated_data.get('password2')
        first_name = validated_data.get('first_name')
        last_name = validated_data.get('last_name')

        try:
            validate_password(password)
      
        except:
            raise serializers.ValidationError({'password': 'password is weak'})

        if (email and User.objects.filter(email=email).exclude(username=username).exists()):
            raise serializers.ValidationError(
                {'email': 'Email addresses must be unique.'})

        if password != password2:
            raise serializers.ValidationError({'password': 'Password must match'})

        user = User(username=username, email=email)

        if first_name:
            user = User(
                username=username, 
                email=email,
                first_name=first_name,   
            )

        if last_name:
            user = User(
                username=username, 
                email=email,
                last_name=last_name    
            )

        if first_name and last_name:
            user = User(
                username=username, 
                email=email,
                first_name=first_name, 
                last_name=last_name    
            )


        user.set_password(password)
        user.save()

        return user