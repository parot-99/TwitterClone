from django.db import models
from django.contrib.auth.models import User
from PIL import Image


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=160, blank=True, null=True)
    birthday = models.DateField(blank=True, null=True)
    name = models.CharField(max_length=50)
    profile_pic = models.ImageField(
        default='default.png', 
        upload_to='profile_pics'
    )


    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.profile_pic.path)

        if img.height > 400 or img.width > 400:
            output_size = (400, 400)
            img.thumbnail(output_size)
            img.save(self.profile_pic.path)
    
    def __str__(self):
        return self.user.username