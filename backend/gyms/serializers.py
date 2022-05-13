from rest_framework import serializers
from authentication.models import User
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Review
        fields = ['id', 'review', 'likes', 'dislikes','place_id' ]
        depth = 1


      