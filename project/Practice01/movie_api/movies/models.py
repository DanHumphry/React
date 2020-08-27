from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=30) # 제목 
    genre = models.CharField(max_length=15) # 장르 
    year = models.IntegerField() # 제작 년도
    # email = models.TextField()

    def __str__(self): 
        return self.title

class User(models.Model):     #아래 추가
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


# Create your models here.
