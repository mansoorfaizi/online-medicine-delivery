from ...models.data.complaint import Complaint
from ...serializers.data.complaint import ComplaintSerializer
from .base import DataRootViewSet


class ComplaintViewSet(DataRootViewSet):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer
