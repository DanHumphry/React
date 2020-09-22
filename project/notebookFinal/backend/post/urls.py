from django.urls import path
from . import views

urlpatterns = [
    path('Todos/', views.TodoView.as_view(), name= 'Todos_list'),
]