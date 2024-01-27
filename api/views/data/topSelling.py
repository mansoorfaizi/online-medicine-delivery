from rest_framework.views import APIView
from rest_framework.response import Response
from ...models.data.ad import Ad
from ...models.data.order_item import OrderItem
from ...serializers.data.ad import AdSerializer
from django.db.models import Count


class TopAdsView(APIView):
    def get(self, request):
        top_ads = (
            OrderItem.objects.values("ad")
            .annotate(count=Count("ad"))
            .order_by("-count")[:4]
        )
        # Get the product IDs from the queryset
        ad_ids = [ad["ad"] for ad in top_ads]
        # Fetch the products from database based on their IDs
        ads = Ad.objects.filter(id__in=ad_ids)

        # Serialize the products data
        serializer = AdSerializer(ads, many=True)
        return Response(serializer.data)
