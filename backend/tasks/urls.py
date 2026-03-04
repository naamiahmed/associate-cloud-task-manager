from django.urls import path, include
from rest_framework import routers
from .views import TaskViewSet, TaskFileViewSet

router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)
router.register(r'files', TaskFileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]