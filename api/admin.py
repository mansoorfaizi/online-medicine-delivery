from django.contrib import admin
from .models.data.ad import Ad
from .models.data.ad import AdImage
from .models.data.category import Category
from .models.data.complaint import Complaint
from .models.data.country import Country
from .models.data.feedback import Feedback
from .models.data.order import Order
from .models.data.order_item import OrderItem
from .models.data.prescription import Prescription
from django.http import HttpResponse
import csv

# Register your models here.


class ExportCsvMixin:
    def export_as_csv(self, request, queryset):
        meta = self.model._meta
        field_names = [field.name for field in meta.fields]

        response = HttpResponse(content_type="text/csv")
        response["Content-Disposition"] = "attachment; filename={}.csv".format(meta)
        writer = csv.writer(response)

        writer.writerow(field_names)
        for obj in queryset:
            row = writer.writerow([getattr(obj, field) for field in field_names])

        return response

    export_as_csv.short_description = "Export Selected"


class AdImageAdmin(admin.StackedInline):
    model = AdImage
    extra = 1


class AdAdmin(admin.ModelAdmin):
    inlines = [AdImageAdmin]
    list_display = ("id", "title", "brand", "generics", "sell_price", "category")
    search_fields = ["id","title", "brand", "generics"]
    list_per_page = 16

    class Meta:
        model = Ad


class OrderItemAdmin(admin.StackedInline):
    model = OrderItem
    extra = 1


class OrderAdmin(admin.ModelAdmin, ExportCsvMixin):
    inlines = [OrderItemAdmin]
    list_display = ("id", "user", "address", "total_amount", "order_date", "order_time")
    list_display_links = (
        "id",
        "user",
    )
    list_filter = (
        "status",
        "order_date",
    )
    search_fields = ("id", "address", "user_email")
    ordering = ["id", "order_date"]
    actions = ["export_as_csv"]


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    list_display_links = (
        "id",
        "name",
    )
    search_fields = ("id", "name")
    ordering = ["id"]


class PrescriptionAdmin(admin.ModelAdmin):
    list_display = ("id", "user_id", "image")
    list_display_links = ("id",)
    search_fields = ["id"]
    ordering = ["id"]


admin.site.register(Category, CategoryAdmin)
admin.site.register(Country)
admin.site.register(Ad, AdAdmin)
admin.site.register(AdImage)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem)
admin.site.register(Prescription, PrescriptionAdmin)
admin.site.register(Complaint)
admin.site.register(Feedback)
