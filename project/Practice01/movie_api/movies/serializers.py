from rest_framework import serializers 
from .models import Movie
from .models import User #추가

class MovieSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Movie # 모델 설정 
        fields = ('id','title','genre','year'
        # ,'email'
        ) # 필드 설정

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'name')