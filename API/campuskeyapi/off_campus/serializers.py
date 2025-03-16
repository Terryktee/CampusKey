from rest_framework import serializers
from .models import Amenity , Campus , Rules,Image,Video


class AmenitySerializer(serializers.ModelSerializer):
    class Meta:
        model=Amenity
        fields= '__all__'
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

class CampusSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)
    videos = VideoSerializer(many=True)
    amenities = AmenitySerializer(many=True)
    class Meta:
        model = Campus
        fields = '__all__'