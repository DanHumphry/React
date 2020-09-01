#user.urls.py
from django.urls import path
from .views import current_user, UserList ,UserViewSet

urlpatterns = [
    path('user', UserViewSet), #제가 추가한것
    path('', UserList.as_view()),
    path('current', current_user),
]
