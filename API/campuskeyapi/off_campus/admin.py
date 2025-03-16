from django.contrib import admin
from .models import Campus, Image, Video, Amenity

class CampusAdmin(admin.ModelAdmin):
    search_fields = ('name', 'location')
    filter_horizontal = ('images', 'videos', 'amenities')

admin.site.register(Campus, CampusAdmin)
admin.site.register(Image)
admin.site.register(Video)
admin.site.register(Amenity)
