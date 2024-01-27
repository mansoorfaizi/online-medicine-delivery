from django.db import models
from .base import DataRoot
from .ad import Ad
from .order import Order


class  OrderItem(DataRoot):
    ad = models.ForeignKey(Ad, on_delete=models.CASCADE)
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name="order_item"
    )
    quantity = models.IntegerField(default=1)
    price = models.IntegerField()

    def __str__(self):
        return str(self.ad) + " | " + str(self.order) + " | " + str(self.quantity)
