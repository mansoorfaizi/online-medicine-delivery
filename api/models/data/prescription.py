from .base import DataRoot
from django.db import models
from django.contrib.auth import get_user_model


class StatusCondition(models.IntegerChoices):
    pending = 1
    canceled = 2
    completed = 3


class Prescription(DataRoot):
    user_id = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    location = models.CharField(max_length=200)
    status = models.PositiveIntegerField(
        choices=StatusCondition.choices,
        default=StatusCondition.pending,
    )
    image = models.ImageField(
        upload_to="frontend/static/images/prescription/%Y/%m/%d/",
        blank=True,
        default="",
    )

    def __str__(self):
        return self.image.name
