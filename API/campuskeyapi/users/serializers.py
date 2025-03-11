from rest_framework import serializers
from .models import Agent,landlord,Student

class AgentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Agent
        fields='__all__'
class landlordSerializer(serializers.ModelSerializer):
    class Meta:
        model=landlord
        fields='__all__'
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields='__all__'