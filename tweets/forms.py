from django import forms
from .models import Tweet

MAX_TWEET_LENGTH = 240

class TweetCreateForm(forms.ModelForm):
    content = forms.CharField(widget=forms.Textarea(attrs={
        'placeholder': 'Your tweet...',
        'rows': 5, 
        'cols': 50
    }))

    class Meta:
        model = Tweet
        fields = [
            'content'
        ]

    def clean_content(self):
        content = self.cleaned_data.get('content')

        if len(content) > MAX_TWEET_LENGTH:
            raise  forms.ValidationError('This tweet is too long')

        return content
