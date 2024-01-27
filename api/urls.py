from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views.data.country import CountryViewSit
from .views.data.category import CategoryViewSit
from .views.data.ad import AdViewSit
from .views.data.order import OrderViewSit
from .views.data.complaint import ComplaintViewSet
from .views.data.feedback import FeedbackViewSet
from .views.data.prescription import PrescriptionViewSet
from .views.data.order_item import OrderItemViewSit
from .views.data.topSelling import TopAdsView
from .views.data.report import (
    total_selling_price,
    get_total_order_price,
    total_orders,
    total_pending_orders,
    total_cancel_orders,
    total_complete_orders,
)

route = routers.DefaultRouter()
route.register(r"countries", CountryViewSit)
route.register(r"categories", CategoryViewSit)
route.register(r"ads", AdViewSit)
route.register(r"orders", OrderViewSit)
route.register(r"order_items", OrderItemViewSit)
route.register(r"complaints", ComplaintViewSet)
route.register(r"feedbacks", FeedbackViewSet)
route.register(r"prescriptions", PrescriptionViewSet)
urlpatterns = [
    path("", include(route.urls)),
    path("top-selling/", TopAdsView.as_view(), name="top-products"),
    path("total-selling-price/", total_selling_price, name="total_selling_price"),
    path(
        "range-total-selling-price/",
        get_total_order_price,
        name="range_total_selling_price",
    ),
    path("total-orders/", total_orders, name="total_orders"),
    path("total-pending-orders/", total_pending_orders, name="total_pending_orders"),
    path("total-cancel-orders/", total_cancel_orders, name="total_cancel_orders"),
    path("total-complete-orders/", total_complete_orders, name="total_complete_orders"),
]
