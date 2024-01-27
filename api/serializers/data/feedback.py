from ...models.data.feedback import Feedback
from .base import DataRootSerializer


class FeedbackSerializer(DataRootSerializer):
    class Meta:
        model = Feedback
        fields = "__all__"
