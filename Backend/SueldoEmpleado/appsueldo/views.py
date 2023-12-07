from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.
from .serializers import *
from .models import *




class EmpleadoView(APIView):
    def get(self,request):
        list = Empleado.objects.all()
        list_empleados = EmpleadoSerializer(list,many=True)
        return Response(list_empleados.data)
    

    def post(self,request):
        empleado = EmpleadoSerializer(data=request.data)
        if(empleado.is_valid()):
            empleado.save()
            return Response(empleado.data)
        

class CategoriaView(APIView):
    def get(self,request):
        categoria_list = Categoria.objects.all()
        categorias = CategoriaSerializer(categoria_list,many=True)
        return Response(categorias.data)