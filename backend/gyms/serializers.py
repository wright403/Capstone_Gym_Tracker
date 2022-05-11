from rest_framework import serializers
from authentication.models import User
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Review
        fields = ['id', 'review','place_id' 'user_id', 'likes', 'dislikes']
        depth = 1


      