from django.contrib import admin
from .models import Profile, FollowingRelation


admin.site.register(Profile)
admin.site.register(FollowingRelation)
