
from rest_framework import serializers
from ..models import Faq, BachelorUniversities, PartnersModel, Dashboard, PersonalInfoModel, Events, ImportantFilesModel, ContactInfoModel, WorkingExperiengeModel, EducationalInfoModel
from django.contrib.auth import get_user_model
from rest_framework.serializers import CharField, EmailField, ValidationError, SerializerMethodField
from django.db.models import Q
User = get_user_model()


class FaqSerializer(serializers.ModelSerializer):
    class  Meta:
        model = Faq
        fields =[
            'pk',
            'question',
            'answer',
            

        ]
class EventsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields=['event', 'Date', 'Location']



class BachelorUniversitiesSerializers(serializers.ModelSerializer):
    class  Meta:
        model = BachelorUniversities
        fields =[
            'pk',
            'name_of_university',
            'Location_of_University',
            'course',
            'years',
            'application_form',
            'Tuition_fee',
            'Accomodation_fee',
            'Application_fee',
            'service_fee'
        ]
        # read_only_fields = ['user']
    # def validate_second_name(self, value):
    #     qs = Workers.objects.filter(title__iexact=value)
    #     if qs.exists():
    #         raise serializers.ValidationError('The name aready exist')


class ImportantFilesSerializers(serializers.ModelSerializer):
    class  Meta:
        model = ImportantFilesModel
        fields =[
            'user',
            'pasport',
            'olevelcertificate',
            'alevelcertificate',
            'bachelortranscript',
            'bachelorcertificate',
            'medicalexamination',
            'clinicalrecord',
            'photo',
        ]




class ContactInfoSerializers(serializers.ModelSerializer):
    class  Meta:
        model = ContactInfoModel
        fields =[
            'user',
            'Full_name1',
            'mobile_person1',
            'whatsap_person1',
            'Email_person1',
            'Street_person1',
            'Districprovince1',
            'Country_person1',
            'zip_no1',

            'Full_name2',
            'mobile_person2',
            'whatsap_person2',
            'Email_person2',
            'Street_person2',
            'Districprovince2',
            'Country_person2',
            'zip_no2',

            'Full_name3',
            'mobile_person3',
            'whatsap_person3',
            'Email_person3',
            'Street_person3',
            'Districprovince3',
            'Country_person3',
            'zip_no3',
        ]

class WorkingExperiengeSerializers(serializers.ModelSerializer):
    class  Meta:
        model = WorkingExperiengeModel
        fields =[
            'user',
            'employer',
            'Year_range',
            'Responsibility',
            'Position',

            'employer2',
            'Year_range2',
            'Responsibility2',
            'Position2',

            'employer3',
            'Year_range3',
            'Responsibility3',
            'Position3',

            'employer4',
            'Year_range4',
            'Responsibility4',
            'Position4',
        ]



class EducationalSerializer(serializers.ModelSerializer):
    class  Meta:
        model = EducationalInfoModel
        fields =[
            'user',
            'Name_of_High_school_or_diploma',
            'From_to_adv',
            'Field_of_study_adv',
            'Name_of_school_secondary_level',
            'from_to_sec',
            'Field_of_study_sec',
            'Bachelor',
            'From_to_bach',
            'Field_of_study_bach',
            'Masters',
            'From_to_master',
            'Field_of_study_master',
            'Source_of_Funding',
        ]

class PersonalSerializer(serializers.ModelSerializer):
    class  Meta:
        model = PersonalInfoModel
        fields =[
            'Date',
            'First_name',
            'Second_name',
            'Family_name',
            'Pasport_number',
            'Valid_until',
            'Country_issue',
            'Place_of_Birth',
            'Date_of_birth',
            'whats_app',
            'mobile',
            'Distric',
            'Age',
            'university',
            'Religion',
            'Marital_status',
            'Highest_degree',
            'occupation',
            'Field',
            'Gender',
            'Degree_type',
            'Region',
            # 'picture',
            'Partner',
        ]
class PartnersSerializer(serializers.ModelSerializer):
    class  Meta:
        model = PartnersModel
        fields =[
            'typed',
            'named',
            'email',
        ]
class DashboardSerializer(serializers.ModelSerializer):
    class  Meta:
        model = Dashboard
        fields =[
            'caption',
            'image',
           
        ]





class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, )
    password2 = serializers.CharField(write_only = True, label= 'Confirm password')

    def create(self, validated_data):
        user = get_user_model().objects.create(
            username = validated_data['username'],
            email = validated_data['email'],
            # first_name = validated_data['first_name'],
            # last_name = validated_data['last_name'],
            # Age = validated_data['Age'],

        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model =User
        fields = ('username', 'email', 'password', 'password2' )

    def validate_password2(self, value):
        data = self.get_initial()
        password = data.get('password')
        password2 = value
        if password != password2:
            raise ValidationError("Password do not match")
            return value





class UserLoginSerializer(serializers.ModelSerializer):
    token = CharField(allow_blank=True, read_only=True)
    username = CharField(allow_blank=True)
    email = EmailField(label="email ", allow_blank=True)
    class Meta:
        model = User
        fields =[
            'username',
            'email',
            'last_login',
            'date_joined',
            'password',
            'token',
        ]

        extra_kwargs = {"password":
                                {"write_only": True}
                                }

    def validate(self, data):
        user_obj =None
        email = data.get("email", None)
        username = data.get("username", None)
        password = data["password"]
        if not email and not username:
            raise ValidationError("A username or Email is required to login")

        user =User.objects.filter(
            Q(email=email) |
            Q(username=username)
            ).distinct()
        user = user.exclude(email__isnull=True).exclude(email__iexact='')
        if user.exists() and user.count() == 1:
            user_obj = user.first()
        else:
            raise ValidationError("This username/email is not valid.")
        if user_obj:
            if not user_obj.check_password(password):
                raise ValidationError("Incorrect password")
        data["token"] = "SOME RANDOM TO"


        return data
