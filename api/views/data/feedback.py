from ...models.data.feedback import Feedback
from ...serializers.data.feedback import FeedbackSerializer
from .base import DataRootViewSet


class FeedbackViewSet(DataRootViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
