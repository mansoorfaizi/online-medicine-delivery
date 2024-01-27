from django.core.mail import send_mail
from django.conf import settings


def send_rest_password_via_email(data):
    subject = data["subject"]
    message = data["body"]
    email_from = settings.EMAIL_HOST_USER
    to = [data["to_email"]]
    send_mail(subject, message, email_from, to)
