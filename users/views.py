from django.http import HttpResponse
from django.shortcuts import redirect, render

from .models import Profile
from .forms import NewUserForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

# Create your views here.
def register(request):
    if request.method == 'POST':
        print(request)
        form = NewUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('/agrobloom/login')
        else:
            print(form.errors.as_data())
            return HttpResponse(form.errors.as_text())
    form = NewUserForm
    context = {
        'form':form,
    }
    return render(request, 'agroProduct/home.html', context)

# @login_required    
# def profile(request):
#     return render(request,'users/profile.html')

# def createprofile(request):
#     if request.method == 'POST':
#         contact_number = request.POST.get('contact_number')
#         image = request.FILES['upload']
#         user = request.user
#         profile = Profile(user=user,image=image,contact_number=contact_number)
#         profile.save()
#     return render(request,'users/createprofile.html')

