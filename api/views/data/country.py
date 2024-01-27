from ...models.data.country import Country
from ...serializers.data.country import CountrySerializer
from .base import DataRootViewSet


class CountryViewSit(DataRootViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
