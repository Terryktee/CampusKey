from .api import CampusList,CampusDetail
from django.urls import path

urlpatterns = [
# ...
path("campus/", CampusList.as_view(), name="campus_list"),
path("campus/<int:pk>/", CampusDetail.as_view(), name="campus_detail"),
]
