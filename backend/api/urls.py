from django.urls import path
from . import views

urlpatterns = [
    path("user_info/", views.GetUserView.as_view(), name="User-info"),
    #path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
]