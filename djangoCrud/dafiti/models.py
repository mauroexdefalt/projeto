from django.db import models
from uuid import uuid4

class Clothes(models.Model):
    id_clothe = models.UUIDField(primary_key=True, default=uuid4 , editable=False)
    title = models.CharField(max_length=255)
    size = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    create_at = models.DateField(auto_now_add=True)


