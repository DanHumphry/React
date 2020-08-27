from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer
from .serializers import PostSerializer
from .models import Post

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostViewSet(viewsets.ModelViewSet):
   queryset = Post.objects.all()
   serializer_class = PostSerializer
# Create your views here.
