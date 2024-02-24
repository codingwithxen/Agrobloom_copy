from django.shortcuts import render
from django.core.paginator import Paginator
from .models import Product

# Create your views here.
def home(request):
    return render(request,'agroProduct/home.html')



#search page
def search(request):
    page_obj = product = Product.objects.all()

    query = request.GET
    query = list(query)[0]

    if (query == 'product-name'):
        if query != '' and query is not None:
            page_obj = product.filter(product_name__icontains=request.GET[query])
    elif (query == 'category'):
        page_obj = product.filter(product_category__icontains=request.GET[query])
    elif (query == 'subcategory'):
        page_obj = product.filter(product_subCategory__icontains=request.GET[query])


    paginator = Paginator(page_obj,4)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    context = {'page_obj':page_obj}
    
    return render(request, 'agroProduct/search.html', context)


def product(request):

    query = request.GET['productId']

    product = Product.objects.get(product_id=query)

    context = {'product': product} 

    return render(request, 'agroProduct/product-page.html', context)

# import json

# file = open('/home/aman/Desktop/major-project/ranju/AgroBloom/agroProduct/data.json')
# data = json.load(file)
# pt = "images/"

# def insert():
#     print('in insert')
#     for row in data['Sheet1']:
#         product = Product(product_id = row['product_id'], product_name = row['product_name'], product_price = row['product_price'], product_subCategory = row['product_subCategory'], product_category = row['product_category'], product_image = pt+row['product_image'])

#         product.save()

# insert()