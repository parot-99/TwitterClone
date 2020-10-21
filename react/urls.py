from django.urls import path
from django.views.generic.base import TemplateView
from .views import react_view
  

urlpatterns = [
   path('', react_view, name='react'), 
   path(
      'robots.txt', 
      TemplateView.as_view(template_name="robots.txt", content_type="text/plain"),
      name='react'), 
]