from ...models.data.prescription import Prescription
from ...serializers.data.prescription import PrescriptionSerializer
from ...serializers.data.prescription import GetPrescriptionSerializer
from .base import DataRootViewSet


class PrescriptionViewSet(DataRootViewSet):
    queryset = Prescription.objects.all().order_by("-id")

    def get_serializer_class(self):
        if self.action == "create" or self.action == "update":
            return PrescriptionSerializer
        else:
            return GetPrescriptionSerializer
