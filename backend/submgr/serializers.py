from rest_framework import serializers
from .models import User, Subscriptions


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'password']



class SubscriptionsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subscriptions
        fields = ['SubName', 'SubDate', 'MonthlyCost', 'Website']
