from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
#from .serializers import pacjentSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import CustomTokenObtainPairSerializer, TerminSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import terminy, placowki
from django.http import JsonResponse, HttpResponse
# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class GetUserView(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(id=user.id)
    
class GetTerminView(generics.ListAPIView):
    serializer_class = TerminSerializer
    permission_classes = [IsAuthenticated]
    


    def get_queryset(self):
        #print(miasto)
        miasto=self.request.GET.get('miasto')
        data=self.request.GET.get('data')
        print(miasto)
        termin = terminy.objects.filter(pacjent__isnull=True,miasto=miasto,data=data)
        #print(miasto)
        return termin
    
class GetPlannedTerminView(generics.ListAPIView):
    serializer_class = TerminSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        #print(miasto)
        user = self.request.user
        termin = terminy.objects.filter(pacjent=user,wiadomosc_dla_lekarza__isnull=False,zakonczone__isnull=True)
        #print(miasto)
        return termin

class GetHistoryTerminView(generics.ListAPIView):
    serializer_class = TerminSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        #print(miasto)
        user = self.request.user
        termin = terminy.objects.filter(pacjent=user,zakonczone__isnull=False)
        #print(miasto)
        return termin
    

# your views.py
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
# class CreatePacjentView(generics.CreateAPIView):
#     queryset = pacjenci.objects.all()
#     serializer_class = pacjentSerializer
#     permission_classes = [AllowAny]