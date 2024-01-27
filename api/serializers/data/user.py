from .base import DataRootSerializer
from django.contrib.auth import get_user_model


class UserSerializer(DataRootSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "email", "name", "phone_number"]
