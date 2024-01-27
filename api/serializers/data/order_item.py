from ...models.data.order_item import OrderItem
from .base import DataRootSerializer
from .ad import AdSerializer


class OrderItemSerializer(DataRootSerializer):
    ad = AdSerializer()

    class Meta:
        model = OrderItem
        fields = "__all__"
