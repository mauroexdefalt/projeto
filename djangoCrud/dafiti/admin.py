from django.contrib import admin

from .models import Clothes

# Register your models here.

@admin.register(Clothes)
class CloathsAdmin(admin.ModelAdmin):
    list_display: ('title', 'size', 'state', 'brand', 'create_at')
    