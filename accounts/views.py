from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from .forms import LoginForm, RegisterForm


# Create your views here.
def user_login(request):

    form = LoginForm(data=request.POST or None)
    if form.is_valid():
        if user := form.get_user():
            login(request, user)
            return redirect('/')



    context = {
        'form': form,
        'title': "Авторизация"
    }
    return render(request, "login.html", context)


# def register(request):
#     form = RegisterForm(request.POST or None)
#     if form.is_valid():
#         user = form.save()
#         login(request, user)
#         return redirect('/')
#     context = {
#         'form': form,
#         'title': "Регистрация"
#     }
#     return render(request, "register.html", context)


def user_logout(request):
    logout(request)
    return redirect('login')
