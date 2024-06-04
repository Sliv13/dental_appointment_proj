from django.contrib import admin
from .models import placowki
from .models import lekarze
#from .models import pacjenci
# Register your models here.
admin.site.register(placowki)
admin.site.register(lekarze)
#admin.site.register(pacjenci)