from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from .models import Tweet


class TweetTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser1', 
            password='testuserpassword123'  
        )
        
        self.user2 = User.objects.create_user(
            username='testuser2', 
            password='testuserpassword123'
        )

        self.client = APIClient()
        self.client2 = APIClient()

        self.client.login(
            username=self.user.username, 
            password='testuserpassword123'
        )

        self.client2.login(
            username=self.user2.username, 
            password='testuserpassword123'
        )

        self.tweet1 = Tweet.objects.create(
            content = 'content 1', 
            user = self.user
        )

        self.tweet2 = Tweet.objects.create(
            content = 'content 2', 
            user = self.user
        )

        self.tweet3 = Tweet.objects.create(
            content = 'content 3', 
            user = self.user
        )

    def test_tweets_created(self):
        self.assertEqual(self.tweet1.id, 1)
        self.assertEqual(self.tweet2.id, 2)
        self.assertEqual(self.tweet3.id, 3)

    def test_tweet_list_api(self):
        response = self.client.get('/api/tweets/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 3)

    def test_action_like_api(self):
        response = self.client.post('/api/tweets/1/like')
        self.assertEqual(response.status_code, 200)

    # def test_action_retweet_api(self):
    #     response = self.client.post('/api/tweets/1/retweet')
    #     self.assertEqual(response.status_code, 201)
    #     self.assertEqual(
    #         Tweet.objects.get(id=4).retweet.content,
    #         Tweet.objects.get(id=1).content
    #     )

    def test_tweet_create_api(self):
        response = self.client.post(
            '/api/tweets/create',
            data={
                'content': 'This is a new tweet'
            }    
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(
            Tweet.objects.get(id=4).content,
            'This is a new tweet'
        )

    def test_tweet_multiple_likes(self):
        self.client.post('/api/tweets/1/like')
        self.client2.post('/api/tweets/1/like')
        response = self.client.get('/api/tweets/1')
        self.assertEqual(response.json()['likes'], 2)


    def test_tweet_delete_api(self):
        response = self.client2.delete('/api/tweets/1/delete')
        self.assertEqual(response.status_code, 401)
        response = self.client.delete('/api/tweets/1/delete')
        self.assertEqual(response.status_code, 200)
        response = self.client.delete('/api/tweets/1/delete')
        self.assertEqual(response.status_code, 404)
    