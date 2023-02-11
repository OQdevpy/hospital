from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect


# Create your views here.

@login_required(login_url='login')
def index(request):
    return render(request, 'index.html')


def settings(request):
    return render(request, 'settings.html')


def services(request):
    return render(request, 'tasks.html')


def specialists(request):
    return render(request, 'contacts.html')


def patients(request):
    return render(request, 'leads.html')


def ambulator(request):
    return render(request, 'deals.html')


def laboratory(request):
    return render(request, 'projects.html')


def nurses(request):
    return render(request, 'activities.html')


def invoices(request):
    return render(request, 'invoices.html')


def user_login(request):
    form = LoginForm()

    if request.method == "POST":
        form = LoginForm(data=request.POST)
        if not form.is_valid():
            return redirect('login')
        if user := form.get_user():
            login(request, user)
            return redirect('index')
        else:
            return redirect('login')
    else:
        form = LoginForm()

    context = {
        'form': form,
        'title': "Авторизация"
    }
    return render(request, "login.html", context)


def user_logout(request):
    logout(request)
    return redirect('login')
