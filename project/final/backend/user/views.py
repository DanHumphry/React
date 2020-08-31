from rest_framework import viewsets 
from .serializers import UserSerializer
from .models import User
# Create your views here.

class UserViewSet(viewsets.ModelViewSet): ##아래 추가
    queryset = User.objects.all()
    serializer_class = UserSerializer
