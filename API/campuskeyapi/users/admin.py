from django.contrib import admin
from .models import custom_user,Agent,Student,landlord
from django.contrib.auth.admin import UserAdmin
# Register your models here.

admin.site.register(custom_user)
admin.site.register(Agent)
admin.site.register(Student)
admin.site.register(landlord)

