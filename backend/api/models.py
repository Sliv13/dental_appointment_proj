from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class placowki(models.Model):
    nazwa=models.CharField(max_length=50)
    miasto=models.CharField(max_length=50)
    adres=models.CharField(max_length=50)
    numer_kontaktowy=models.CharField(max_length=50)
    pass


class lekarze(models.Model):
    #foreign key w lekarzu do placowek
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    placowka=models.ForeignKey(placowki,on_delete=models.CASCADE,related_name='lekarze')
    specjalizacja=models.CharField(max_length=30)
    pass
 


class terminy(models.Model):
    #foreign key w terminach do lekarza i do pacjenta
    placowka=models.ForeignKey(placowki,default='',on_delete=models.CASCADE,related_name='terminy_placowka')
    lekarz=models.ForeignKey(lekarze,default='',on_delete=models.CASCADE,related_name='terminy_lekarz')
    pacjent=models.ForeignKey(User,default='',blank=True,on_delete=models.CASCADE,related_name='terminy_pacjent')
    data=models.DateField(blank=True,default= '2023-01-01')
    godzina=models.TextField(blank=True)
    szczegoly=models.CharField(max_length=150,blank=True)
    wiadomosc_dla_lekarza=models.CharField(max_length=150,blank=True)
    pass

class zakonczone(models.Model):
    #foreign key w terminach do lekarza i do pacjenta
    pass