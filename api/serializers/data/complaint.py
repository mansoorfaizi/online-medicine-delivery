from ...models.data.complaint import Complaint
from .base import DataRootSerializer


class ComplaintSerializer(DataRootSerializer):
    class Meta:
        model = Complaint
        fields = "__all__"
