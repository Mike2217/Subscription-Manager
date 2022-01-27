from rest_framework import serializers
from .models import User, Subscriptions


class UserSerializer(serializers.ModelSerializer):
    subscriptions = serializers.StringRelatedField(many=True)
    class Meta:
        model = User
        fields = ['name', 'password', 'subscriptions']



class SubscriptionsSerializer(serializers.ModelSerializer):
    user = serializers.HyperlinkedRelatedField(view_name='user-detail', read_only=True)
    class Meta:
        model = Subscriptions
        fields = ['SubName', 'SubDate', 'MonthlyCost', 'Website', 'user']
