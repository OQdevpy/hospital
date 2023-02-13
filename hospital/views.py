from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

from hospital.models import Doctor, Diseased, Complaint, Laboratory, Chamber


# Create your views here.

@login_required(login_url='accounts/login')
def index(request):
    return render(request, 'index.html')


def settings(request):
    return render(request, 'settings.html')


def services(request):
    return render(request, 'tasks.html')


def specialists(request):
    doctors = Doctor.objects.all()
    context = {
        'doctors': doctors,}
    return render(request, 'contacts.html',context)


def patients(request):
    patients_ = Complaint.objects.all()
    context = {"patients":patients_}
    return render(request, 'leads.html',context)


def ambulator(request):
    return render(request, 'deals.html')


def laboratory(request):
    laboratory_=Chamber.objects.all()
    context = {"laboratories":laboratory_}
    return render(request, 'projects.html',context)


def nurses(request):
    return render(request, 'activities.html')


def invoices(request):
    return render(request, 'invoices.html')



