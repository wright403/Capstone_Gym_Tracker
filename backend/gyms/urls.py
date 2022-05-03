from django.urls import path
from . import views

urlpatterns = [
path('reviews/', views.ReviewList.as_view()),
path('', views.ReviewDetail.as_view()),
path('update/<int:review_id>/', views.ReviewUpdate.as_view()),
path('like/<int:review_id>/', views.ReviewLike.as_view()),

]