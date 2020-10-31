from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('authentication.urls')),
    path('api/tweets/', include('tweets.urls')), 
    path('api/profiles/', include('profiles.urls')),  
    path('api/settings/', include('settings.urls')),  
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path('^(?:.*)/?$', include('react.urls'))]