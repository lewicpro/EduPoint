from __future__ import unicode_literals
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
# -*- coding: utf-8 -*-
Mr = 'Mr'
Mrs = 'Mrs'
Ms = 'Ms'
Sir = 'Sir'
title = (
    (Mr, 'Mr'),
    (Mrs, 'Mrs'),
    (Ms, 'Ms'),
    (Sir, 'Sir')
)


CSE = 'CSE'
ECE = 'ECE'
MECH = 'MECH'
CIVIL = 'CIVIL'
EDUCATION = 'EDUCATION'
department = (
    (CSE, 'CSE'),
    (ECE, 'ECE'),
    (MECH, 'MECH'),
    (CIVIL, 'CIVIL'),
    (EDUCATION, 'EDUCATION')
)


class Faq(models.Model):
    question = models.CharField(max_length=120, blank=False, null=True)
    answer = models.CharField(max_length=120, blank=False, null=True)


class Events(models.Model):
    event = models.CharField(max_length=120, blank=False, null=True)
    Date = models.CharField(max_length=120, blank=False, null=True)
    Location = models.CharField(max_length=120, blank=False, null=True)


class BachelorUniversities(models.Model):
    name_of_university = models.CharField(max_length=120, blank=False, null=True)
    Location_of_University = models.CharField(max_length=120, blank=False, null=True)
    course = models.CharField(max_length=120, blank=False, null=True)
    years = models.CharField(max_length=120, blank=False, null=True)
    Tuition_fee = models.CharField(max_length=120, blank=False, null=True)
    Accomodation_fee = models.CharField(max_length=120, blank=False, null=True)
    Application_fee = models.CharField(max_length=120, blank=False, null=True)
    service_fee = models.CharField(max_length=120, blank=False, null=True)
    application_form = models.FileField()


class PersonalInfoModel(models.Model):
    Date = models.DateTimeField(auto_now=False,  auto_now_add=True, null=True )
    First_name = models.CharField(max_length=120, blank=True, null=True)
    Second_name = models.CharField(max_length=120, blank=True, null=True)
    Family_name = models.CharField(max_length=120, blank=True, null=True)
    Pasport_number = models.CharField(max_length=120, blank=True, null=True)
    Valid_until = models.CharField(max_length=120, blank=True, null=True)
    Country_issue = models.CharField(max_length=120, blank=True, null=True)
    Place_of_Birth = models.CharField(max_length=120, blank=True, null=True)
    Date_of_birth = models.CharField(max_length=120, blank=True, null=True)
    whats_app = models.CharField(max_length=120, blank=True, null=True)
    mobile = models.CharField(max_length=120, blank=True, null=True)
    Religion = models.CharField(max_length=120, blank=True, null=True)
    Marital_status = models.CharField(max_length=120, blank=True, null=True)
    Highest_degree = models.CharField(max_length=120, blank=True, null=True)
    occupation = models.CharField(max_length=120, blank=True, null=True)
    Field = models.CharField(max_length=120, blank=True, null=True)
    Gender = models.CharField(max_length=120, blank=True, null=True)
    Age = models.CharField(max_length=120, blank=True, null=True)
    Distric = models.CharField(max_length=120, blank=True, null=True)
    Degree_type = models.CharField(max_length=120, blank=True, null=True)
    Partner = models.CharField(max_length=120, blank=True, null=True)
    university = models.CharField(max_length=120, blank=True, null=True)
    Region = models.CharField(max_length=120, blank=True, null=True)
    # picture = models.FileField()


class AirportPickUpModel(models.Model):
    Date = models.DateTimeField(auto_now=False,  auto_now_add=True, null=True )
    Full_name = models.CharField(max_length=120, blank=True, null=True)
    Gender = models.CharField(max_length=120, blank=True, null=True)
    Number_of_persons = models.CharField(max_length=120, blank=True, null=True)
    Country_of_residence = models.CharField(max_length=120, blank=True, null=True)
    Flight_No = models.CharField(max_length=120, blank=True, null=True)
    Depature_airport = models.CharField(max_length=120, blank=True, null=True)
    Arival_city = models.CharField(max_length=120, blank=True, null=True)
    Arrival_airport = models.CharField(max_length=120, blank=True, null=True)
    Arrival_date = models.CharField(max_length=120, blank=True, null=True)
    Arrival_address = models.CharField(max_length=120, blank=True, null=True)
    mobile = models.CharField(max_length=120, blank=True, null=True)
    Email = models.CharField(max_length=120, blank=True, null=True)
    Emergence_phone = models.CharField(max_length=120, blank=True, null=True)


class AccomodationModel(models.Model):
    Date = models.DateTimeField(auto_now=False,  auto_now_add=True, null=True )
    Full_name = models.CharField(max_length=120, blank=True, null=True)
    Gender = models.CharField(max_length=120, blank=True, null=True)
    Number_of_persons = models.CharField(max_length=120, blank=True, null=True)
    Country_of_residence = models.CharField(max_length=120, blank=True, null=True)
    Hotels_name = models.CharField(max_length=120, blank=True, null=True)
    Place = models.CharField(max_length=120, blank=True, null=True)
    Double_or_single = models.CharField(max_length=120, blank=True, null=True)
    Trip_advisor = models.CharField(max_length=120, blank=True, null=True)
    Arrival_date = models.CharField(max_length=120, blank=True, null=True)
    Arrival_address = models.CharField(max_length=120, blank=True, null=True)
    mobile = models.CharField(max_length=120, blank=True, null=True)
    Email = models.CharField(max_length=120, blank=True, null=True)
    Emergence_phone = models.CharField(max_length=120, blank=True, null=True)
    # Highest_degree = models.CharField(max_length=120, blank=True, null=True)
    # occupation = models.CharField(max_length=120, blank=True, null=True)
    # Field = models.CharField(max_length=120, blank=True, null=True)
    # Age = models.CharField(max_length=120, blank=True, null=True)
    # Distric = models.CharField(max_length=120, blank=True, null=True)
    # Degree_type = models.CharField(max_length=120, blank=True, null=True)
    # Partner = models.CharField(max_length=120, blank=True, null=True)
    # university = models.CharField(max_length=120, blank=True, null=True)
    # Region = models.CharField(max_length=120, blank=True, null=True)
    # # picture = models.FileField()


class Dashboard(models.Model):
    caption = models.CharField(max_length=120, blank=False, null=True)
    image = models.FileField()




class EducationalInfoModel(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Name_of_High_school_or_diploma = models.CharField(max_length=120, blank=False, null=True)
    From_to_adv = models.CharField(max_length=120, blank=False, null=True)
    Field_of_study_adv = models.CharField(max_length=120, blank=False, null=True)

    Name_of_school_secondary_level = models.CharField(max_length=120, blank=False, null=True)
    from_to_sec = models.CharField(max_length=120, blank=False, null=True)
    Field_of_study_sec = models.CharField(max_length=120, blank=False, null=True)


    Bachelor = models.CharField(max_length=120, blank=False, null=True)
    From_to_bach = models.CharField(max_length=120, blank=False, null=True)
    Field_of_study_bach = models.CharField(max_length=120, blank=False, null=True)

    Masters = models.CharField(max_length=120, blank=True, null=True)
    From_to_master = models.CharField(max_length=120, blank=False, null=True)
    Field_of_study_master = models.CharField(max_length=120, blank=False, null=True)


    Source_of_Funding = models.CharField(max_length=120, blank=False, null=True)
    Partner = models.CharField(max_length=120, blank=True, null=True)





class ContactInfoModel(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    Full_name1 = models.CharField(max_length=120, blank=False, null=True)
    mobile_person1 = models.CharField(max_length=120, blank=False, null=True)
    whatsap_person1 = models.CharField(max_length=120, blank=False, null=True)
    Email_person1 = models.CharField(max_length=120, blank=False, null=True)
    Street_person1 = models.CharField(max_length=120, blank=False, null=True)
    Districprovince1 = models.CharField(max_length=120, blank=False, null=True)
    Country_person1 = models.CharField(max_length=120, blank=False, null=True)
    zip_no1 = models.CharField(max_length=120, blank=False, null=True)
    
    Full_name2 = models.CharField(max_length=120, blank=True, null=True)
    mobile_person2 = models.CharField(max_length=120, blank=True, null=True)
    whatsap_person2 = models.CharField(max_length=120, blank=True, null=True)
    Email_person2 = models.CharField(max_length=120, blank=True, null=True)
    Street_person2 = models.CharField(max_length=120, blank=True, null=True)
    Districprovince2 = models.CharField(max_length=120, blank=True, null=True)
    Country_person2 = models.CharField(max_length=120, blank=True, null=True)
    zip_no2 = models.CharField(max_length=120, blank=True, null=True)
    
    Full_name3 = models.CharField(max_length=120, blank=True, null=True)
    mobile_person3 = models.CharField(max_length=120, blank=True, null=True)
    whatsap_person3 = models.CharField(max_length=120, blank=True, null=True)
    Email_person3 = models.CharField(max_length=120, blank=True, null=True)
    Street_person3 = models.CharField(max_length=120, blank=True, null=True)
    Districprovince3 = models.CharField(max_length=120, blank=True, null=True)
    Country_person3 = models.CharField(max_length=120, blank=True, null=True)
    zip_no3 = models.CharField(max_length=120, blank=True, null=True)
    Partner = models.CharField(max_length=120, blank=True, null=True)
    

class ImportantFilesModel(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    pasport =models.FileField()
    olevelcertificate =models.FileField()
    alevelcertificate =models.FileField()
    bachelortranscript =models.FileField()
    bachelorcertificate =models.FileField()
    medicalexamination =models.FileField()
    clinicalrecord =models.FileField()
    photo =models.FileField()

class WorkingExperiengeModel(models.Model):
    user = models.CharField(max_length=120, blank=True, null=True)
    employer = models.CharField(max_length=120, blank=True, null=True)
    Year_range = models.CharField(max_length=120, blank=True, null=True)
    Responsibility = models.CharField(max_length=120, blank=True, null=True)
    Position = models.CharField(max_length=120, blank=True, null=True)

    employer2 = models.CharField(max_length=120, blank=True, null=True)
    Year_range2 = models.CharField(max_length=120, blank=True, null=True)
    Responsibility2 = models.CharField(max_length=120, blank=True, null=True)
    Position2 = models.CharField(max_length=120, blank=True, null=True)
    
    employer3 = models.CharField(max_length=120, blank=True, null=True)
    Year_range3 = models.CharField(max_length=120, blank=True, null=True)
    Responsibility3 = models.CharField(max_length=120, blank=True, null=True)
    Position3 = models.CharField(max_length=120, blank=True, null=True)

    employer4 = models.CharField(max_length=120, blank=True, null=True)
    Year_range4 = models.CharField(max_length=120, blank=True, null=True)
    Responsibility4 = models.CharField(max_length=120, blank=True, null=True)
    Position4 = models.CharField(max_length=120, blank=True, null=True)
    Partner = models.CharField(max_length=120, blank=True, null=True)

        

class EventsModel(models.Model):
    user = models.CharField(max_length=120, blank=False, null=True)
    image = models.FileField()
    Description = models.CharField(max_length=120, blank=False, null=True)
    Date =models.DateTimeField(auto_now=True, null=True)


class PartnersModel(models.Model):
    typed = models.CharField(max_length=120, blank=False, null=True)
    named = models.CharField(max_length=120, blank=False, null=True)
    email = models.CharField(max_length=120, blank=True, null=True)
# class User(AbstractUser):
#     Age = models.CharField(max_length=12, null=True, blank=True)
#     name = models.CharField(max_length=12, null=True, blank=True)

#     def __str__(self):
#         return self.Age
