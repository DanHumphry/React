from .serializers import PostSerializer, TodoSerializer
from .models import Post, Todo
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []   #이거 두줄은 권한이 없는 상태에서 데이테 요청을 가능하게
    permission_classes = []       #만듬 settings.py에서도 아마 가능할 것 같음.

    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = PostSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TodoView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    authentication_classes = []   #이거 두줄은 권한이 없는 상태에서 데이테 요청을 가능하게
    permission_classes = []       #만듬 settings.py에서도 아마 가능할 것 같음.

    def get(self, request, *args, **kwargs):
        Todos = Todo.objects.all()
        serializer = TodoSerializer(Todos, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        Todos_serializer = TodoSerializer(data=request.data)
        if Todos_serializer.is_valid():
            Todos_serializer.save()
            return Response(Todos_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', Todos_serializer.errors)
            return Response(Todos_serializer.errors, status=status.HTTP_400_BAD_REQUEST)