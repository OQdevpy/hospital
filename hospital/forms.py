from django.contrib.auth.models import User
from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm



class LoginForm(AuthenticationForm):
    username = forms.CharField(max_length=50, help_text="Maksimal 30 tagacha belgi",
                               widget=forms.TextInput(attrs={
                                   'class': 'form-control',
                                   'placeholder': 'Login...'
                               }))
    password = forms.CharField(label="Parol", widget=forms.PasswordInput(attrs={
        'class': 'form-control',
        'placeholder': 'Parolni kiriting... '
    }))