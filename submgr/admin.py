from ast import Sub
from re import S
from django.contrib import admin
from .models import User, Subscriptions
# Register your models here.

admin.site.register(User)
admin.site.register(Subscriptions)