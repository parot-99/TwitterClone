from django.contrib.auth import login
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView
from .serializers import UserCreateSerializer

class LoginView(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        
        return super(LoginView, self).post(request, format=None)


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def user_create_view(request):
    serializer = UserCreateSerializer(data=request.data)

    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response({}, status.HTTP_201_CREATED)        
    

    return Response({}, status=status.HTTP_400_BAD_REQUEST)