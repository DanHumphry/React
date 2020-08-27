from rest_framework import viewsets 
from .serializers import MovieSerializer 
from .models import Movie 
from .serializers import UserSerializer #추가
from .models import User #추가

class MovieViewSet(viewsets.ModelViewSet): 
    queryset = Movie.objects.all() 
    serializer_class = MovieSerializer

class UserViewSet(viewsets.ModelViewSet): ##아래 추가
    queryset = User.objects.all()
    serializer_class = UserSerializer
# Create your views here.
