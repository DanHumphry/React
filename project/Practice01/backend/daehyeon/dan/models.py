from django.db import models

class User(models.Model):
    email = models.CharField(max_length=30, primary_key=True)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Post(models.Model):
   text = models.CharField(max_length=500)
   location = models.CharField(max_length=100)
   
class PostImage(models.Model):
   post = models.ForeignKey(Post, on_delete=models.CASCADE)
   image = models.ImageField(upload_to="post/%Y/%m/%d")

class News(models.Model): 
   image = models.ImageField(default=None)
# Create your models here.
