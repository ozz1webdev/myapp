from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import (
    CreateProfileView,
    UpdateProfileView,
    DeleteProfileView,
    RegisterView,
    ProfileView,
)

urlpatterns = [
    path('token/',TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('token/refresh/',TokenRefreshView.as_view(), name="token_refresh"),
    path('register/', RegisterView.as_view(), name="register"),
    path('profile/', ProfileView.as_view(), name="detailprofile"),
    path('profile/create/', CreateProfileView.as_view(), name="createprofile"),
    path('profile/update/<int:pk>/', UpdateProfileView.as_view(), name="updateprofile"),
    path('profile/delete/<int:pk>/', DeleteProfileView.as_view(), name="deleteprofile"),
]
