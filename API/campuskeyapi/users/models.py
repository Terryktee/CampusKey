from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,Permission,Group,BaseUserManager

# Create your models here.

class CustomUserManager(BaseUserManager):
    def create_user(self, usernae, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        username = self.normalize_email(username)
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_admin", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra_fields)

class custom_user(AbstractBaseUser, PermissionsMixin):
    user_permissions = models.ManyToManyField(Permission, related_name="custom_user_permission", blank=True)
    groups = models.ManyToManyField(Group, related_name="custom_user_groups", blank=True)
    user = models.EmailField(unique=True)
    is_student = models.BooleanField(default=False)
    is_agent = models.BooleanField(default=False)
    is_landlord = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()  # 

    def __str__(self):
        return self.username

class Agent(models.Model):
    user=models.OneToOneField(custom_user,on_delete=models.CASCADE)
    student_number = models.CharField(max_length=10)
    student_name=models.CharField(max_length=255)
    status_verified=models.BooleanField(default=False)
    phone_number=models.IntegerField()
    email=models.CharField(max_length=255)
    reference_id=models.CharField(max_length=255)
    student_year=models.IntegerField()

    def __str__(self):
        return self.student_number

class landlord(models.Model):
    user=models.OneToOneField(custom_user,on_delete=models.CASCADE)
    titles = models.CharField(max_length=255 , choices =
    [
        ('mr','Mr'),
        ('mrs','Mrs',),
        ('miss','Miss'),
        ('Ms','Ms'),
        ('Sir','Sir'),
        ('Madam','Madam'),
    ])
    surname=models.CharField(max_length=255)
    phone_number=models.IntegerField()
    email=models.CharField(max_length=255)
    status_verified=models.BooleanField(default=False)

    def __str__(self):
        return self.surname

class Student(models.Model):
    user=models.OneToOneField(custom_user,on_delete=models.CASCADE)
    student_number = models.CharField(max_length=10)
    student_name=models.CharField(max_length=255)
    status_verified=models.BooleanField(default=False)
    phone_number=models.IntegerField()
    email=models.CharField(max_length=255)
    reference_id=models.CharField(max_length=255)
    student_year=models.IntegerField()

    def __str__(self):
        return self.student_number

    """
    a student is only verified after he/she has paid some money and also sent a email of verification to there student email
    or else sent offer letter and paid some money.

    bottleneck for the freshmen who doesnt have there email will have to use there personal email
    after they have done orienation and verification en they change to there students email
    for better updates and the hub in the process of making this become easy for all
    """