from django.db import models

class User(models.Model): #제가 추가한것
    ID = models.CharField(max_length=20, primary_key=True)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.ID

# Create your models here.
