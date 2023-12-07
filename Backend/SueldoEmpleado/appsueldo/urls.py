
from django.urls import path
from .views import *

urlpatterns = [
    path('empleados',EmpleadoView.as_view(),name="empleados"),
        path('categorias',CategoriaView.as_view(),name="categorias"),

]
