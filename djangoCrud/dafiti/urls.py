from django.urls import path

from .views import CloathsApiView


urlpatterns = [
    path('cloath/', CloathsApiView.as_view(), name='cloath'),
]

