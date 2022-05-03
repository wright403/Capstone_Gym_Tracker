from django.db import models
from authentication.models import User

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    
