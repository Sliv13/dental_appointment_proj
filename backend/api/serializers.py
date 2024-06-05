from django.contrib.auth.models import User,Group
from rest_framework import serializers
#from .models import pacjenci
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import terminy,placowki,lekarze
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # Add your extra responses here
        group=self.user.groups.filter(name='lekarz').exists()
        if group:
            data['group'] = 'lekarz'
        else:
             data['group'] = 'pacjent'
        return data



class UserSerializer(serializers.ModelSerializer):
    
    #name = serializers.CharField(required=False)
    class Meta:
        model = User
        fields=['id','first_name','last_name','email','username','password']
        extra_kwargs={'password':{'write_only':True}}
        
    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        return user
    
# class PlacowkaSerializer(serializers.ModelSerializer):
    
#     #name = serializers.CharField(required=False)
#     class Meta:
#         model = placowki
#         fields=['nazwa']
class PlacowkaSerializer(serializers.BaseSerializer):
    def to_representation(self, instance):
        return {
             instance.nazwa,
        }
class LekarzSerializer(serializers.BaseSerializer):
    def to_representation(self, instance):
        return {
             str(instance),
        }
class TerminSerializer(serializers.ModelSerializer):
    placowka= PlacowkaSerializer(placowki.nazwa)
    lekarz=LekarzSerializer(lekarze)
    #name = serializers.CharField(required=False)
    class Meta:
        model = terminy
        fields=['id','placowka','miasto','lekarz','pacjent','data','godzina','szczegoly','wiadomosc_dla_lekarza']
    
        
    # def create(self,validated_data):
    #     user=terminy.objects.create_user(**validated_data)
    #     return user
    
# class pacjentSerializer(serializers.ModelSerializer):
    
#     #name = serializers.CharField(required=False)
#     class Meta:
#         model = pacjenci
#         fields=['id','first_name','last_name','email','username','password']
#         extra_kwargs={'password':{'write_only':True}}
        
#     def create(self,validated_data):
#         pacjent=pacjenci.objects.create_user(**validated_data)
#         return pacjent