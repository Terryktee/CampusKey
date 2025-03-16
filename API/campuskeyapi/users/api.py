from rest_framework import generics
from .serializers import landlordSerializer,StudentSerializer
from .models import Landlord,Student
from rest_framework.permissions import BasePermission,IsAuthenticated


class LandlordList(generics.ListAPIView):
    permission_classes =[IsAuthenticated]
    queryset = Landlord.objects.all()
    serializer_class = landlordSerializer

    search_fields = ['username']
    
class StudentList(generics.ListAPIView):
    permission_classes =[IsAuthenticated]
    queryset=Student.objects.all()
    serializer_class=StudentSerializer
