from .api import LandlordList,StudentList
from django.urls import path , include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
# ...
path("Landlord/", LandlordList.as_view(), name="landlord_list"),
path("Student/", StudentList.as_view(), name="student_list"),
path("api/token/",TokenObtainPairView.as_view(),name='token_obtain_pair'),
path("api/token/refresh/",TokenRefreshView.as_view(),name='token_refresh'),

]


