from django.db import models, request
from django.contrib.auth.models import User

# Create your models here.

# class User(models.Model):
#   # name = models.CharField(max_length=256)
#   # password = models.CharField(max_length=256)

# # change password to not have special characters

#   def __str__(self):
#       return self.name


class Subscriptions(models.Model):
    SubName = models.CharField(max_length=128)
    SubDate = models.DateField()
    MonthlyCost = models.FloatField()
    Website = models.CharField(max_length=256)
    user = User.objects.get(username=request.POST['username'])
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='subscriptions')
    # user_id = models.ForeignKey(User.id, on_delete=models.CASCADE, related_name='subscriptions')

    def __str__(self):
        return self.SubName



