from django.contrib.auth import get_user_model
from django.contrib import admin
from .models import CustomUser, Student, Landlord

User = get_user_model()

# Only unregister if User is registered
if User in admin.site._registry:
    admin.site.unregister(User)

class StudentInline(admin.StackedInline):
    model = Student
    extra = 0

class LandlordInline(admin.StackedInline):
    model = Landlord
    extra = 0

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'is_student', 'is_landlord', 'is_verified')
    inlines = [StudentInline, LandlordInline]  

    def save_model(self, request, obj, form, change):
        """ Ensure a Student or Landlord instance is created properly """
        super().save_model(request, obj, form, change)  # Save User first

        if obj.is_student() and not hasattr(obj, 'student'):
            Student.objects.create(user=obj, student_number=f"STU{obj.id}", reference_id=f"REF{obj.id}", student_year=1, phone_number="0000000000")

        if obj.is_landlord() and not hasattr(obj, 'landlord'):
            Landlord.objects.create(user=obj, title="mr", phone_number="0000000000")

admin.site.register(Student)
admin.site.register(Landlord)
