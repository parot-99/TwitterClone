from django.contrib import admin
from .models import Tweet, TweetLike


class TweetAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'user', 'date_created']
    search_fields = ['user__username']

    class Meta:
        model = Tweet


admin.site.register(Tweet, TweetAdmin)
admin.site.register(TweetLike)
