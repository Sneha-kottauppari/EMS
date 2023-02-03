from django.db import models

# Create your models here.
class Employees(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]
    Name=models.CharField(max_length=100)
    Age=models.IntegerField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)

    def __str__(self):
        return self.Name