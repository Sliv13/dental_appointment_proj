from django.contrib.auth.models import User,Group
from rest_framework import serializers
#from .models import pacjenci
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

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
    
# class pacjentSerializer(serializers.ModelSerializer):
    
#     #name = serializers.CharField(required=False)
#     class Meta:
#         model = pacjenci
#         fields=['id','first_name','last_name','email','username','password']
#         extra_kwargs={'password':{'write_only':True}}
        
#     def create(self,validated_data):
#         pacjent=pacjenci.objects.create_user(**validated_data)
#         return pacjent