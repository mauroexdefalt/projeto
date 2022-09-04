# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response    
# Create your views here.
from .models import Clothes
from .API.serializers import ClothesSerialiazer

class CloathsApiView(APIView):
    def get(self, request):
        clothes = Clothes.objects.all()
        data = ClothesSerialiazer(clothes, many=True).data
        return Response(data)
    
    def post(self, request):
        print(request)
        clothes = ClothesSerialiazer(data=request.data)
        if clothes.is_valid():
            clothes.save()
            return Response(clothes.data, status=201)
        else:
            return Response(clothes.errors, status=400)
        
    def delete(self, request):    
        clothes = Clothes.objects.get(pk=request.data['id_clothe'])
        clothes.delete()
        return Response(status=204)
    
   
   
    def put(self,request):
        clothes = Clothes.objects.get(pk=request.data['id_clothe'])
        clothes.title = request.data['title']
        clothes.size = request.data['size']
        clothes.state = request.data['state']
        clothes.brand = request.data['brand']
        clothes.save()
        return Response(status=204)
