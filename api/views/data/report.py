from django.db.models import Sum
from django.http import JsonResponse
from ...models.data.order import Order
from datetime import datetime


def total_selling_price(request):
    date = request.GET.get("date")
    total_price = Order.objects.filter(order_date=date).aggregate(
        total=Sum("total_amount")
    )
    return JsonResponse({"total_price": total_price["total"]})


from django.db.models import Sum
from django.http import JsonResponse


def get_total_order_price(request):
    start_date = request.GET.get("start_date")
    end_date = request.GET.get("end_date")

    total_price = Order.objects.filter(
        order_date__range=[start_date, end_date]
    ).aggregate(price__sum=Sum("total_amount"))["price__sum"]

    return JsonResponse({"total_sell_price": total_price})


def total_orders(request):
    count = Order.objects.count()
    return JsonResponse({"total_order": count})


def total_pending_orders(request):
    count = Order.objects.filter(status=1).count()
    return JsonResponse({"total_pending_order": count})


def total_cancel_orders(request):
    count = Order.objects.filter(status=2).count()
    return JsonResponse({"total_cancel_order": count})


def total_complete_orders(request):
    count = Order.objects.filter(status=3).count()
    return JsonResponse({"total_complete_order": count})
