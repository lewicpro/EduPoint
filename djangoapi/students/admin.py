# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import *


# Register your models here.
class FaqAdmin(admin.ModelAdmin):
    list_display=['question', 'answer']


class EventAdmin(admin.ModelAdmin):
    list_display=['event', 'Date', 'Location']

class BachelorUniAdmin(admin.ModelAdmin):
    list_display=['name_of_university', 'Location_of_University', 'course', 'years', 'application_form','Tuition_fee',
        'Accomodation_fee',
        'Application_fee',
        'service_fee']


class dashoardAdmin(admin.ModelAdmin):
    list_display=[
        'caption',
        'image'
    ]
class PersonalAdmin(admin.ModelAdmin):
    list_display=[
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
        'Religion',
        'Marital_status',
        'Highest_degree',
        'occupation',
        'Field',
        'Gender',
        'Degree_type',
        # 'Picture',
]



class EducationalAdmin(admin.ModelAdmin):
    list_display=[
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




class WorkingExperiengeAdmin(admin.ModelAdmin):
    list_display=[
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


class ContactInfoAdmin(admin.ModelAdmin):
    list_display=[
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
    

class ImportantFilesAdmin(admin.ModelAdmin):
    list_display=[
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


class EventsAdmin(admin.ModelAdmin):
    list_display=[
        'user',
        'image',
        'Description',
        'Date',
    ]


class PartnersAdmin(admin.ModelAdmin):
    list_display=[
        'typed',
        'named',
        'email',
  
]



# class UserAdmin(admin.ModelAdmin):
#     list_display=['Age']



admin.site.register(Faq, FaqAdmin)
admin.site.register(BachelorUniversities, BachelorUniAdmin)
admin.site.register(Events, EventAdmin)
# admin.site.register(User, UserAdmin)
admin.site.register(PersonalInfoModel, PersonalAdmin)
admin.site.register(EducationalInfoModel, EducationalAdmin)
admin.site.register(WorkingExperiengeModel, WorkingExperiengeAdmin)
admin.site.register(ContactInfoModel, ContactInfoAdmin)
admin.site.register(ImportantFilesModel, ImportantFilesAdmin)
admin.site.register(PartnersModel, PartnersAdmin)
