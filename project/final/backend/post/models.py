from django.db import models


# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='post_images')

    def __str__(self):
        return self.title

class Todo(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    image = models.ImageField(upload_to='post_images', blank=True)
    date = models.DateTimeField(auto_now_add=True)
    comment = models.IntegerField(default=0)
    like = models.IntegerField(default=0)
    username = models.CharField(max_length=200)
    language = models.CharField(max_length=200)
    profileImage = models.CharField(default='/media/red.jpg', max_length=500)

    def __str__(self):
        return self.title

class Borad(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='board_images', blank=True)
    comment = models.IntegerField(default=0)
    like = models.IntegerField(default=0)
    view = models.IntegerField(default=0)
    username = models.CharField(max_length=200)

    def __str__(self):
        return self.title