from django.db import models
from users.models import Landlord

# Create your models here.
class Amenity(models.Model):
    name=models.CharField(max_length=255)
    
    def __str__(self):
        return self.name

class Rules(models.Model):
    rule = models.CharField(max_length=255)

    def __str__(self):
        return self.rule

class Image(models.Model):
    image=models.ImageField(upload_to='off_campus_images/')
class Video(models.Model):
    video=models.FileField(upload_to='off_campus_videos/')
class Campus(models.Model):
    GENDER_CHOICES = [
        ('boys_only','Boys_Only'),
        ('girls_only','Girls_Only'),
        ('mixed','Mixed'),
    ]
    owner=models.ForeignKey(Landlord,on_delete=models.CASCADE,related_name='houses')
    name=models.CharField(max_length=255)
    address=models.CharField(max_length=255)
    latitude=models.DecimalField(max_digits=10,decimal_places=7,blank=False,null=False)
    longitude=models.DecimalField(max_digits=10,decimal_places=7,blank=False,null=False)
    price=models.DecimalField(max_digits=3,decimal_places=2)
    distance=models.DecimalField(max_digits=10,decimal_places=7,blank=False,null=False)
    roomfor = models.IntegerField()
    rules = models.ManyToManyField(Rules)
    amenities=models.ManyToManyField(Amenity)
    description=models.TextField(blank=True,null=True)
    Refundable=models.BooleanField(default=False)
    gender_options = models.CharField(max_length = 10 , choices=GENDER_CHOICES)
    images=models.ManyToManyField(Image,blank=False)
    videos=models.ManyToManyField(Video,blank=False)
    blacklist = models.BooleanField(default=False)

    def __str__(self):
        return self.name

