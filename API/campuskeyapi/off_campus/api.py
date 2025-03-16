from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .serializers import CampusSerializer
from .models import Campus


class CampusList(generics.ListCreateAPIView):
    permission_classes=[IsAuthenticated]
    queryset=Campus.objects.all()
    serializer_class=CampusSerializer
    filterset_fields = ['address','gender_options','roomfor','rules','price','distance', 'amenties', 'description', 'Refundable', 'blacklist']
    search_fields = ['owner','name','address']

class CampusDetail(generics.RetrieveDestroyAPIView):
    permission_classes=[IsAuthenticated]
    queryset = Campus.objects.all()
    serializer_class = CampusSerializer
