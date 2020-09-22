from django.urls import path
from .views import(
   home_view, 
   tweet_detail_view, 
   tweet_list_view
)


urlpatterns = [
   path('', home_view, name='home'),
   path('tweets/', tweet_list_view, name='tweets'),
   path('tweets/<int:tweet_id>/', tweet_detail_view, name='tweet')
]