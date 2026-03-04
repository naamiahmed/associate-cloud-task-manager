from rest_framework import viewsets
from .models import Task, TaskFile
from .serializers import TaskSerializer, TaskFileSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('-created_at')
    serializer_class = TaskSerializer

class TaskFileViewSet(viewsets.ModelViewSet):
    queryset = TaskFile.objects.all().order_by('-uploaded_at')
    serializer_class = TaskFileSerializer