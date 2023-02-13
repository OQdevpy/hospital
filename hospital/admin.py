from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ('id' , 'price', 'is_empty', 'number')
    list_editable = ('price','is_empty')

@admin.register(Chamber)
class ChamberAdmin(admin.ModelAdmin):
    list_display = ('id','room','open_time','close_time','days')
    list_editable = ('days',)
admin.site.register(Specialist)
admin.site.register(Doctor)
admin.site.register(Diseased)
admin.site.register(Complaint)
admin.site.register(Laboratory)
admin.site.register(Diseased_to_Laboratory)