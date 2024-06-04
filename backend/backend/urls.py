from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView
from rest_framework_simplejwt.views import TokenRefreshView
from api.views import CustomTokenObtainPairView
#from api.views import CreatePacjentView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/register/',CreateUserView.as_view(),name='register'),
    path('api/token/',CustomTokenObtainPairView.as_view(), name = 'get_token_s'),
    path('api/token/refresh/',TokenRefreshView.as_view(), name = 'refresh'),
    path('api-auth/',include('rest_framework.urls')),
    path("api/", include("api.urls")),
]
