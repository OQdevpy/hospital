from django.urls import path
from .views import *


urlpatterns = [
    path('', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
    path('index/', index, name='index'),
    path('settings/', settings, name='settings'),
    path('services/', services, name='services'),
    path('specialists/', specialists, name='specialists'),
    path('patients/', patients, name='patients'),
    path('ambulatory/', ambulator, name='ambulatory'),
    path('laboratory/', laboratory, name='laboratory'),
    path('nurses/', nurses, name='nurses'),
    path('invoices/', invoices, name='invoices')
]