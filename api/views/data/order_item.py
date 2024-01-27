from ...models.data.order_item import OrderItem
from ...serializers.data.order_item import OrderItemSerializer
from .base import DataRootViewSet


class OrderItemViewSit(DataRootViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
