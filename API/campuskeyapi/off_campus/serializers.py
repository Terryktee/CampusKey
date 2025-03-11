from rest_framework import serializers
from .models import Amenty , Campus , Rules,Image,Video


class AmentySerializer(serializers.ModelSerializer):
    class Meta:
        model=Amenty
        fields= '__all__'
class CampusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campus
        fields = '__all__'
class RulesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Rules
        fields= '__all__'
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields= '__all__'

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Video
        fields= '__all__'
