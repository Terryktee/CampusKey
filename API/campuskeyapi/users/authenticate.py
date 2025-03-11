from django.contrib.auth.backends import ModelBackend
from .models import custom_user

class CustomAuthBackend(ModelBackend):
    def authenticate(self,request,eail=None,password=None):
        try:
            user=custom_user.objects.get(email=email)
            if user.check_password(password) and user.is_active:
                return user
        except custom_user.DoesNotExist:
            return None
            
    def get_user(self,user_id):
        try:
            return customer_user.obejects.get(pk=user_id)
        except custom_user.DoesNotExist:
            return None
