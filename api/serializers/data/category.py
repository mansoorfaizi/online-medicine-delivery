from ...models.data.category import Category
from .base import DataRootSerializer


class CategorySerializer(DataRootSerializer):
    class Meta:
        model = Category
        fields = "__all__"
