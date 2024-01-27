from django.db import models
from .base import DataRoot


class Country(DataRoot):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
