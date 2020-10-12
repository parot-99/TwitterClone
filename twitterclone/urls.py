from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('profiles.urls')),
    path('', include('react.urls')), 
    path('api/tweets/', include('tweets.urls')), 
    path('api/profiles/', include('profiles.urls'))
]

from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)