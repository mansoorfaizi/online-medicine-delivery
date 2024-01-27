from ...models.data.ad import Ad
from ...serializers.data.ad import AdSerializer
from .base import DataRootViewSet
from rest_framework.filters import SearchFilter
from .pagination import AdPagination
from django_filters.rest_framework import DjangoFilterBackend


class AdViewSit(DataRootViewSet):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer
    pagination_class = AdPagination
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["title", "generics"]
    filterset_fields = ["category"]
