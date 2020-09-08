from rest_framework import serializers
from .models import Post, Todo, Borad

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Borad
        fields = '__all__'