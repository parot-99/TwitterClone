from django.db import models


class Tweet(models.Model):
    content = models.CharField(max_length=240 ,blank=True, null =True)
    date_created = models.DateTimeField(auto_now=True)
    image = models.FileField(
        upload_to='images/', 
        blank=True, 
        null=True
    )

    def __str__(self):
        return f'{self.id}'