from rest_framework import viewsets
from dafiti.API import serializers
from dafiti import models
from rest_framework.permissions import IsAuthenticated


class ClothesViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    
    serializer_class = serializers.ClothesSerialiazer
    queryset = models.Clothes.objects.all()