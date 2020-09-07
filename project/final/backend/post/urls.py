
from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.PostView.as_view(), name= 'posts_list'),
    path('Todos/', views.TodoView.as_view(), name= 'Todos_list'),
]