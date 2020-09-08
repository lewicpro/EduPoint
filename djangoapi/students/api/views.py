from rest_framework import generics, mixins
from ..models import Faq, BachelorUniversities, PartnersModel, PersonalInfoModel, Dashboard, ContactInfoModel, EducationalInfoModel, Events, ContactInfoModel, WorkingExperiengeModel, ImportantFilesModel
from .serializers import FaqSerializer, PartnersSerializer, BachelorUniversitiesSerializers, DashboardSerializer, EventsSerializers, UserSerializer, UserLoginSerializer, PersonalSerializer, ImportantFilesSerializers, ContactInfoSerializers, WorkingExperiengeSerializers, EducationalSerializer

from .permissions import IsOwnerOrReadOnly
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny, IsAuthenticated
User = get_user_model()

import nexmo
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView

client = nexmo.Client(key='acb92ae9', secret='Lw@191919')


class FaqCheck( mixins.CreateModelMixin ,generics.ListAPIView):
    lookup_field = 'pk'
    serializer_class = FaqSerializer
    permission_classes = [AllowAny]


    def get_queryset(self):
        return Faq.objects.all()

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)





class EventListener( mixins.CreateModelMixin ,generics.ListAPIView):
    lookup_field = 'pk'
    serializer_class = EventsSerializers
    permission_classes = [AllowAny]


    def get_queryset(self):
        return Events.objects.all()

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class UniverView( mixins.CreateModelMixin ,generics.ListAPIView):
    lookup_field = 'pk'
    serializer_class = BachelorUniversitiesSerializers
    permission_classes = [AllowAny]


    def get_queryset(self):
        return BachelorUniversities.objects.all()

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)





class CreateUserView(generics.CreateAPIView):
    model = get_user_model()
    permission_classes = (AllowAny, )
    serializer_class = UserSerializer




class PersonalView(generics.CreateAPIView, generics.ListAPIView):
    # model = get_user_model()
    permission_classes = (AllowAny, )
    serializer_class = PersonalSerializer

    def get_queryset(self):
        return PersonalInfoModel.objects.all()


class PartnersView(generics.CreateAPIView, generics.ListAPIView):
    # model = get_user_model()
    permission_classes = (AllowAny, )
    serializer_class = PartnersSerializer

    def get_queryset(self):
        return PartnersModel.objects.all()

class DashboardView(generics.CreateAPIView, generics.ListAPIView):
    # model = get_user_model()
    permission_classes = (AllowAny, )
    serializer_class = DashboardSerializer

    def get_queryset(self):
        return Dashboard.objects.all()





class WorkingExperiengeView(generics.CreateAPIView, generics.ListAPIView):
    # model = get_user_model()
    permission_classes = (AllowAny, )
    serializer_class = WorkingExperiengeSerializers

    def get_queryset(self):
        return WorkingExperiengeModel.objects.all()







class ContactInfoView(generics.CreateAPIView, generics.ListAPIView):
    # model = get_user_model()
    permission_classes = (AllowAny, )
    serializer_class = ContactInfoSerializers
    def get_queryset(self):
        return ContactInfoModel.objects.all()


class ImportantFileView(generics.CreateAPIView, generics.ListAPIView):
    # model = get_user_model()
    permission_classes = (AllowAny, )
    serializer_class = ImportantFilesSerializers

    def get_queryset(self):
        return ImportantFilesModel.objects.all()



class EducationalView(generics.CreateAPIView, generics.ListAPIView):
    # model = get_user_model()
    permission_classes = (AllowAny, )
    serializer_class = EducationalSerializer

    def get_queryset(self):
        return EducationalInfoModel.objects.all()

class UserLoginAPIView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer


    def get_queryset(self):
        return User.objects.all()


    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = UserLoginSerializer(data=data)
        
        if serializer.is_valid(raise_exception=True):
            new_data = serializer.data
            client.send_message({
                'from': '13658000421',
                'to': '+255719060504',
                'text': 'You are loged in mboma',
                
                });
            
            print('sent2')
            return Response(new_data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

