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

        self.client = APIClient()

        self.client.login(
            username=self.user.username, 
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

    def test_tweet_creted(self):
        self.assertEqual(self.tweet1.id, 1)
        self.assertEqual(self.tweet2.id, 2)
        self.assertEqual(self.tweet3.id, 3)

    def test_tweet_list(self):
        response = self.client.get('/api/tweets/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 3)

    def test_action_like(self):
        response = self.client.post('/api/tweets/1/like')
        self.assertEqual(response.status_code, 200)

    