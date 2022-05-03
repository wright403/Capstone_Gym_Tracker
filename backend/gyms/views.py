from django.http.response import Http404
from django.shortcuts import render
from .models import Review
from .serializers import ReviewSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes




@permission_classes([AllowAny])
class ReviewList(APIView):
    def get(self, request):
        comment = Review.objects.all()
        serializer = ReviewSerializer(comment, many=True)
        return Response(serializer.data)