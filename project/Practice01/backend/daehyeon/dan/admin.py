from django.contrib import admin

from .models import User, Post, PostImage, News

admin.site.register(User)
admin.site.register(Post)
admin.site.register(PostImage)
admin.site.register(News)


# Register your models here.
