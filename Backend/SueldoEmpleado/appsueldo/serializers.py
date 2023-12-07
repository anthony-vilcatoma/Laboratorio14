from rest_framework import serializers
from .models import Empleado,Categoria



class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id','nombre','precio') 

class EmpleadoSerializer (serializers.ModelSerializer):
    categoria = serializers.PrimaryKeyRelatedField(queryset=Categoria.objects.all())
    class Meta:
        model=Empleado
        fields=('id','nombre','categoria')

    
    def to_representation(self, instance):
        representation = super(EmpleadoSerializer, self).to_representation(instance)
        representation['categoria'] = CategoriaSerializer(instance.categoria).data
        return representation

