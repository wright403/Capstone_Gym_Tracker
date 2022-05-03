from rest_framework import serializers
from authentication.models import User
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Review
        fields = ['id', 'user_id', 'text']
        depth = 1


      