from rest_framework import serializers
from dafiti import models

class ClothesSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = models.Clothes
        fields = '__all__'