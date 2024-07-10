from django.shortcuts import render, redirect
from .models import Pastel
from django.contrib import messages

# Create your views here.

def pedido (request):
    pasteles = Pastel.objects.all()
    return render (request, "pedido.html", {"pasteles": pasteles})

def registrarPedido(request):
    codigo=request.POST['txtCodigo']
    nombre=request.POST['txtNombre']
    cantidad=request.POST['txtEstado']

    pastel = Pastel.objects.create(codigo=codigo, nombre=nombre, cantidad=cantidad)
    messages.success(request, '¡Pedido Registrado!')
    return redirect('/')

def eliminarPedido(request, codigo):
    pastel = Pastel.objects.get(codigo=codigo)
    pastel.delete()
    messages.success(request, '¡Pedido Eliminado!')
    return redirect('/')

def edicionPedido(request, codigo):
    pastel = Pastel.objects.get(codigo=codigo)
    return render(request, "edicionPedido.html", {"pastel":pastel})

def editarPedido(request):
    codigo=request.POST['txtCodigo']
    nombre=request.POST['txtNombre']
    cantidad=request.POST['txtEstado']

    pastel = Pastel.objects.get(codigo=codigo)
    pastel.nombre = nombre 
    pastel.cantidad = cantidad
    pastel.save()

    messages.success(request, '¡Pedido Editado!')

    return redirect('/')

def productos_view(request):
    return render(request, 'productos.html')

def index_view(request):
    return render(request, 'index.html')

def servicios_view(request):
    return render(request, 'servicios.html')

def contacto_view(request):
    return render(request, 'contacto.html')

def carrito_view(request):
    return render(request, 'carrito.html')