from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
path('reviews/', views.ReviewList.as_view()),
path('', views.ReviewDetail.as_view()),
path('update/<int:review_id>/', views.ReviewUpdate.as_view()),
path('like/<int:review_id>/', views.ReviewLike.as_view()),
path('dislike/<int:review_id>/', views.ReviewDislike.as_view()),

]
urlpatterns = format_suffix_patterns(urlpatterns)