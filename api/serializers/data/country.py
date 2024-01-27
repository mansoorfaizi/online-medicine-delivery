from ...models.data.country import Country
from .base import DataRootSerializer


class CountrySerializer(DataRootSerializer):
    class Meta:
        model = Country
        fields = "__all__"
