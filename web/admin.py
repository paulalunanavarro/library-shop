from django.contrib import admin
from .models import (
    Usuario,
    Categoria,
    Producto,
    Carrito,
    CarritoProducto,
    Pedido,
    PedidoProducto
)

# Registrar modelos simples
admin.site.register(Categoria)
admin.site.register(Producto)
admin.site.register(Carrito)
admin.site.register(CarritoProducto)
admin.site.register(PedidoProducto)


# Personalizar la vista del modelo Usuario
@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'rol', 'is_active', 'is_staff')
    list_filter = ('rol', 'is_active')
    search_fields = ('username', 'email')


# Personalizar la vista del modelo Pedido
@admin.register(Pedido)
class PedidoAdmin(admin.ModelAdmin):
    list_display = ('id', 'usuario', 'fecha', 'estado', 'total')
    list_filter = ('estado', 'fecha')
    search_fields = ('usuario__username',)
    date_hierarchy = 'fecha'
