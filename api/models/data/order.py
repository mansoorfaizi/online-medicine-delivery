from django.db import models
from .base import DataRoot
from .ad import Ad
from django.contrib.auth import get_user_model


class StatusCondition(models.IntegerChoices):
    pending = 1
    canceled = 2
    completed = 3


class Order(DataRoot):
    address = models.CharField(max_length=200, null=False, blank=False)
    status = models.PositiveIntegerField(
        choices=StatusCondition.choices,
        default=StatusCondition.pending,
    )
    delivery_instruction = models.TextField(max_length=200)
    delivery_fee = models.IntegerField(null=True, blank=True)
    total_amount = models.PositiveBigIntegerField()
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    order_date = models.DateField(auto_now_add=True)
    order_time = models.TimeField(auto_now_add=True)

    def __str__(self):
        return str(self.order_date) + " | " + str(self.order_time)
