from django.urls import path
from .api.api_views import (
    tweet_list_view,
    tweet_detail_view,
    tweet_create_view,
    tweet_delete_view,
    tweet_like_view, 
    tweet_retweet_view,
    login_view
)

urlpatterns = [
    path('', tweet_list_view, name='tweets'),
    path('create/', tweet_create_view, name='create-tweet'),
    path('<int:tweet_id>/', tweet_detail_view, name='tweet'), 
    path('<int:tweet_id>/delete/', tweet_delete_view, name='delete-tweet'),
    path('<int:tweet_id>/like/', tweet_like_view, name='like-tweet'),
    path('<int:tweet_id>/retweet/', tweet_retweet_view, name='retweet-tweet'),
    path('login/', login_view, name='login'),
]