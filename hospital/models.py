from django.db import models
from django.db.migrations.operations import special
from phonenumber_field.modelfields import PhoneNumberField

from accounts.models import Account


class Specialist(models.Model):
    name = models.CharField(max_length=221)
    price = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Doctor(Account):
    ROLE = (
        (0, 'Labarant'),
        (1, 'Doctor')
    )
    role = models.IntegerField(default=0, choices=ROLE)
    specialist = models.ForeignKey(Specialist, on_delete=models.CASCADE)


class Diseased(models.Model):
    full_name = models.CharField(max_length=221)
    birthday = models.DateTimeField()
    location = models.CharField(max_length=221)
    phone = PhoneNumberField(unique=True)

    def __str__(self):
        return self.full_name


class Complaint(models.Model):
    complaint = models.CharField(max_length=255)
    specialist = models.ForeignKey(Specialist, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.complaint


class Laboratory(models.Model):
    name = models.CharField(max_length=221)
    narxi = models.PositiveIntegerField()
    laborant = models.ForeignKey(Doctor, on_delete=models.SET_NULL, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Diseased_to_Laboratory(models.Model):
    diseased = models.ForeignKey(Diseased, on_delete=models.CASCADE)
    laboratory = models.ForeignKey(Laboratory, on_delete=models.CASCADE)

    def __str__(self):
        return self.diseased.full_name


class Room(models.Model):
    price = models.PositiveIntegerField()
    is_empty = models.BooleanField()

    def __str__(self):
        return str(self.price)

class Chamber(models.Model):
    room = models.ForeignKey(Room, on_delete=models.PROTECT)
    diseased = models.ForeignKey(Diseased, on_delete=models.PROTECT)
    diagnosis = models.CharField(max_length=250)
    open_time = models.DateTimeField(auto_now_add=True)
    close_time = models.DateTimeField()


    # @property
    # def get_sum_price(self):
    #     print((self.close_time.day()-self.open_time.day())*self.room.price)
    #     return (self.close_time.day()-self.open_time.day())*self.room.price





