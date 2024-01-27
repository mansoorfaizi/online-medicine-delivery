from ...models.data.ad import Ad, AdImage
from .base import DataRootSerializer
from .category import CategorySerializer
from .country import CountrySerializer


class AdImageSerializer(DataRootSerializer):
    class Meta:
        model = AdImage
        fields = "__all__"


class AdSerializer(DataRootSerializer):
    category = CategorySerializer()
    country = CountrySerializer()
    images = AdImageSerializer(many=True)

    class Meta:
        model = Ad
        fields = "__all__"
