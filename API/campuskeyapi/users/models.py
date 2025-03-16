from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    is_verified = models.BooleanField(default=False)  # Keeps track of verification status

    def is_student(self):
        return Student.objects.filter(user=self).exists()
    def is_landlord(self):
        return Landlord.objects.filter(user=self).exists()



class Landlord(models.Model):  
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)  
    title = models.CharField(
        max_length=10,
        choices=[
            ('mr', 'Mr'),
            ('mrs', 'Mrs'),
            ('miss', 'Miss'),
            ('ms', 'Ms'),
            ('sir', 'Sir'),
            ('madam', 'Madam'),
        ]
    )
    phone_number = models.CharField(max_length=20)  

    def __str__(self):
        return f"{self.title} {self.user.last_name}"


class Student(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)  
    student_number = models.CharField(max_length=15, unique=True)  
    reference_id = models.CharField(max_length=255, unique=True)
    student_year = models.PositiveIntegerField()
    phone_number = models.CharField(max_length=20)  

    def __str__(self):
        return self.student_number
