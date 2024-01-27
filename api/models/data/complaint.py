from .base import DataRoot
from django.db import models
from django.contrib.auth import get_user_model


class Complaint(DataRoot):
    message = models.CharField(max_length=500)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self):
        return self.message
