from rest_framework import serializers
from .models import Landlord,Student,CustomUser

class landlordSerializer(serializers.ModelSerializer):
    class Meta:
        model=Landlord
        fields='__all__'
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields='__all__'
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        field='__all__'