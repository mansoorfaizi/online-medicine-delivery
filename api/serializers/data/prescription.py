from ...models.data.prescription import Prescription
from .user import UserSerializer
from .base import DataRootSerializer
from django.contrib.auth import get_user_model


class PrescriptionSerializer(DataRootSerializer):
    class Meta:
        model = Prescription
        fields = "__all__"


class GetPrescriptionSerializer(DataRootSerializer):
    user_id = UserSerializer(read_only=True)

    class Meta:
        model = Prescription
        fields = "__all__"
