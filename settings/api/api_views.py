from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import (
    validate_password,
    ValidationError
)
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.serializers import ValidationError as RestValidationError
from profiles.api.serializers import ProfileSerializer


@api_view(['PUT', 'GET'])
def profile_update_view(request):
    user = get_object_or_404(User, username=request.user.username)

    if request.method == 'GET':
        serializer = ProfileSerializer(instance=user.profile)

        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'PUT':
        serializer = ProfileSerializer(
            instance=user.profile,
            data=request.data
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({}, status=status.HTTP_200_OK)


@api_view(['POST'])
def password_update_view(request):
    user = get_object_or_404(User, username=request.user.username)

    username = request.user.username
    password = request.data['old_password']
    new_password = request.data['new_password']
    new_password2 = request.data['new_password2']

    authenticated_user = authenticate(
        request,
        username=username,
        password=password
    )

    if authenticated_user is not None:
        try:
            validate_password(new_password)
        except ValidationError as error:
            return Response(
                {'message': error},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if new_password == new_password2:     
            user.set_password(new_password)
            user.save()
          
            return Response(
                {'message': 'updated'},
                status=status.HTTP_200_OK
            )

        else:
            return Response(
                {'message': 'passwords did not match'},
                status=status.HTTP_400_BAD_REQUEST
            )

    return Response(
        {'message': 'Wrong Password'},
        status=status.HTTP_400_BAD_REQUEST
    )

@api_view(['POST'])
def email_update_view(request):
    username = request.user.username
    password = request.data['password']
    email = request.data['email']

    user = get_object_or_404(User, username=username)

    authenticated_user = authenticate(
        request,
        username=username,
        password=password
    )

    if authenticated_user is None:
        return Response(
            {'message': 'Wrong Password'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    if (email and User.objects.filter(email=email).exclude(username=username).exists()):
            raise RestValidationError(
                {'message': 'Email address must be unique.'}
            )

    setattr(user, 'email', email)
    user.save()

    return Response(
        {'success': 'Email updated succesfully'},
        status=status.HTTP_200_OK
    )


@api_view(['POST'])
def profile_delete_view(request):
    user = get_object_or_404(User, username=request.user.username)
    user.delete()

    return Response(
        {'success': 'account deleted'},
        status=status.HTTP_200_OK
    )

