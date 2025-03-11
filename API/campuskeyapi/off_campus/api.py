from rest_framework import generics
from .serializers import CampusSerializer
from .models import Campus


class CampusList(generics.ListCreateAPIView):
    queryset=Campus.objects.all()
    serializer_class=CampusSerializer

class CampusDetail(generics.RetrieveDestroyAPIView):
    queryset = Campus.objects.all()
    serializer_class = CampusSerializer
