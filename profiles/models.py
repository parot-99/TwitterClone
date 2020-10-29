from django.db import models
from django.contrib.auth.models import User
from PIL import Image


class FollowingRelation(models.Model):
    from_profile = models.ForeignKey(
        'Profile', 
        on_delete=models.CASCADE, 
        related_name='rel_from'
    )
    to_profile = models.ForeignKey(
        'Profile', 
        on_delete=models.CASCADE,
        related_name='rel_to'
    )
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'from {self.from_profile} to {self.to_profile}'


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=160, blank=True, null=True)
    birthday = models.DateField(blank=True, null=True)
    name = models.CharField(max_length=50)
    profile_pic = models.ImageField(
        default='default.png', 
        upload_to='profile_pics'
    )
    following = models.ManyToManyField(
        'self',
        symmetrical=False,
        related_name='followers',
        through=FollowingRelation,
        blank=True
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