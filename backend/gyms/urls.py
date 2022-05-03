from django.urls import path
from . import views

urlpatterns = [
path('reviews/', views.ReviewList.as_view()),
]