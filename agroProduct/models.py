from django.db import models

# Create your models here.
class Product(models.Model):
    def __str__(self):
        return self.product_name
    
    product_id = models.IntegerField(primary_key=True)
    product_name = models.CharField(max_length=200)
    product_price = models.CharField(max_length=20)
    product_subCategory = models.CharField(max_length=100)
    product_category = models.CharField(max_length=100)
    product_image = models.ImageField(blank=True,upload_to='images')