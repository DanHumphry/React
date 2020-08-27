from django.contrib import admin

from .models import Movie
from .models import User #추가

admin.site.register(Movie)
admin.site.register(User) #추가 
# Register your models here.
