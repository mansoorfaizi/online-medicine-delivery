from ...models.data.category import Category
from ...serializers.data.category import CategorySerializer
from .base import DataRootViewSet


class CategoryViewSit(DataRootViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
