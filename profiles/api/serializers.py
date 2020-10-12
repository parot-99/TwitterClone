from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username', 
        ]


class UserSerializerToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)


    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)

        return token

    def create(self, validate_data):
        password = validate_data.pop('password', None)
        password2 = validate_data.pop('password2', None)
        instance = self.Meta.model(**validate_data)

       
        if (password is not None and (password == password2)):
            instance.set_password(password)
        
        else:
            raise serializers.ValidationError('')

        instance.save()

        return instance

    class Meta:
        model = User
        fields = [
            'token',
            'id',
            'username',
            'password',
            'password2',
        ]

