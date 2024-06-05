from django.urls import path
from . import views

urlpatterns = [
    path("user_info/", views.GetUserView.as_view(), name="User-info"),
    path("terminy/",views.GetTerminView.as_view(),name='terminy'),
    path("terminy/planned/",views.GetPlannedTerminView.as_view(),name='terminy_plan'),
    path("terminy/history/",views.GetHistoryTerminView.as_view(),name='terminy_hist'),
    #path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
]