from django.db import models
from authentication.models import User

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.CharField(max_length=255)
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    
