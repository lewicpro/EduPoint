

from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token
from .views import FaqCheck, UniverView, PartnersView, EventListener, DashboardView, EducationalView, WorkingExperiengeView, PersonalView, ImportantFileView, ContactInfoView, UserLoginAPIView, CreateUserView




urlpatterns = [
    url(r'^$', FaqCheck.as_view(), name='home'),
    url(r'^Applications', UniverView.as_view(), name='Applications'),
    url(r'^events', EventListener.as_view(), name='Events'),
    url(r'^login/$', UserLoginAPIView.as_view(), name='login'),
    url(r'^UserCreate/$', CreateUserView.as_view(), name='Usercreate'),
    url(r'^Personal/$', PersonalView.as_view(), name='Personal'),
    url(r'^WorkingExperienge/$', WorkingExperiengeView.as_view(), name='WorkingExperience'),
    url(r'^Contact/$', ContactInfoView.as_view(), name='Contact'),
    url(r'^Important/$', ImportantFileView.as_view(), name='Important'),
    url(r'^Educational/$', EducationalView.as_view(), name='Educational'),
    url(r'^UserCreate/$', CreateUserView.as_view(), name='Usercreate'),
    url(r'^Partner/$', PartnersView.as_view(), name='Partner'),
    url(r'^Dashboard/$', DashboardView.as_view(), name='dashboard'),
    url(r'^api/auth/token-auth/', obtain_jwt_token),
]

