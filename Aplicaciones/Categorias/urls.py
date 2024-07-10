from django.urls import path
from . import views
from .views import productos_view
from .views import pedido
from .views import index_view
from .views import servicios_view
from .views import contacto_view
from .views import carrito_view


urlpatterns = [

    path('', views.pedido, name='home'),
    path('registrarPedido/', views.registrarPedido, name='registrarPedido'),
    path('eliminarPedido/<codigo>', views.eliminarPedido, name='eliminarPedido'),
    path('edicionPedido/<codigo>', views.edicionPedido, name='edicionPedido'),
    path('editarPedido/', views.editarPedido, name='editarPedido'),
    path('productos/', productos_view, name='productos'),
    path('pedido/', pedido, name='pedido'),
    path('index/', index_view, name='index'),
    path('servicios/', servicios_view, name='servicios'),
    path('contacto/', contacto_view, name='contacto'),
    path('carrito/', carrito_view, name='carrito'),

]