from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, SubscriptionsSerializer
from .models import User, Subscriptions


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class SubscriptionsViewSet(viewsets.ModelViewSet):
    queryset = Subscriptions.objects.all()
    serializer_class = SubscriptionsSerializer
    # permission_classes = [permissions.IsAuthenticated]


# AttributeError: module 'submgr.views' has no attribute 'UsersViewSet'
