from ...models.data.order import Order
from ...models.data.order_item import OrderItem
from ...serializers.data.order import OrderSerializer
from rest_framework.decorators import api_view
from .base import DataRootViewSet
from ...serializers.data.order import GetOrderSerializer
from django.views.decorators.csrf import csrf_exempt


class OrderViewSit(DataRootViewSet):
    queryset = Order.objects.all().order_by("status")

    def get_serializer_class(self):
        if self.action == "create" or self.action == "update":
            return OrderSerializer
        else:
            return GetOrderSerializer
