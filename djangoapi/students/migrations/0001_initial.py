# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-08-14 05:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BachelorUniversities',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_of_university', models.CharField(max_length=120, null=True)),
                ('Location_of_University', models.CharField(max_length=120, null=True)),
                ('course', models.CharField(max_length=120, null=True)),
                ('years', models.CharField(max_length=120, null=True)),
                ('Tuition_fee', models.CharField(max_length=120, null=True)),
                ('Accomodation_fee', models.CharField(max_length=120, null=True)),
                ('Application_fee', models.CharField(max_length=120, null=True)),
                ('service_fee', models.CharField(max_length=120, null=True)),
                ('application_form', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='ContactInfoModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(blank=True, max_length=120, null=True)),
                ('Full_name1', models.CharField(max_length=120, null=True)),
                ('mobile_person1', models.CharField(max_length=120, null=True)),
                ('whatsap_person1', models.CharField(max_length=120, null=True)),
                ('Email_person1', models.CharField(max_length=120, null=True)),
                ('Street_person1', models.CharField(max_length=120, null=True)),
                ('Districprovince1', models.CharField(max_length=120, null=True)),
                ('Country_person1', models.CharField(max_length=120, null=True)),
                ('zip_no1', models.CharField(max_length=120, null=True)),
                ('Full_name2', models.CharField(blank=True, max_length=120, null=True)),
                ('mobile_person2', models.CharField(blank=True, max_length=120, null=True)),
                ('whatsap_person2', models.CharField(blank=True, max_length=120, null=True)),
                ('Email_person2', models.CharField(blank=True, max_length=120, null=True)),
                ('Street_person2', models.CharField(blank=True, max_length=120, null=True)),
                ('Districprovince2', models.CharField(blank=True, max_length=120, null=True)),
                ('Country_person2', models.CharField(blank=True, max_length=120, null=True)),
                ('zip_no2', models.CharField(blank=True, max_length=120, null=True)),
                ('Full_name3', models.CharField(blank=True, max_length=120, null=True)),
                ('mobile_person3', models.CharField(blank=True, max_length=120, null=True)),
                ('whatsap_person3', models.CharField(blank=True, max_length=120, null=True)),
                ('Email_person3', models.CharField(blank=True, max_length=120, null=True)),
                ('Street_person3', models.CharField(blank=True, max_length=120, null=True)),
                ('Districprovince3', models.CharField(blank=True, max_length=120, null=True)),
                ('Country_person3', models.CharField(blank=True, max_length=120, null=True)),
                ('zip_no3', models.CharField(blank=True, max_length=120, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='EducationalInfoModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(blank=True, max_length=120, null=True)),
                ('Name_of_High_school_or_diploma', models.CharField(max_length=120, null=True)),
                ('From_to_adv', models.CharField(max_length=120, null=True)),
                ('Field_of_study_adv', models.CharField(max_length=120, null=True)),
                ('Name_of_school_secondary_level', models.CharField(max_length=120, null=True)),
                ('from_to_sec', models.CharField(max_length=120, null=True)),
                ('Field_of_study_sec', models.CharField(max_length=120, null=True)),
                ('Bachelor', models.CharField(max_length=120, null=True)),
                ('From_to_bach', models.CharField(max_length=120, null=True)),
                ('Field_of_study_bach', models.CharField(max_length=120, null=True)),
                ('Masters', models.CharField(blank=True, max_length=120, null=True)),
                ('From_to_master', models.CharField(max_length=120, null=True)),
                ('Field_of_study_master', models.CharField(max_length=120, null=True)),
                ('Source_of_Funding', models.CharField(max_length=120, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.CharField(max_length=120, null=True)),
                ('Date', models.CharField(max_length=120, null=True)),
                ('Location', models.CharField(max_length=120, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='EventsModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=120, null=True)),
                ('image', models.FileField(upload_to='')),
                ('Description', models.CharField(max_length=120, null=True)),
                ('Date', models.DateTimeField(auto_now=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Faq',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=120, null=True)),
                ('answer', models.CharField(max_length=120, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ImportantFilesModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(blank=True, max_length=120, null=True)),
                ('pasport', models.FileField(upload_to='')),
                ('olevel_certificate', models.FileField(upload_to='')),
                ('alevel_certificate', models.FileField(upload_to='')),
                ('bachelor_transcript', models.FileField(upload_to='')),
                ('bachelor_certificate', models.FileField(upload_to='')),
                ('medical_examination', models.FileField(upload_to='')),
                ('clinical_record', models.FileField(upload_to='')),
                ('photo', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='PersonalInfoModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('First_name', models.CharField(max_length=120, null=True)),
                ('Second_name', models.CharField(max_length=120, null=True)),
                ('Family_name', models.CharField(max_length=120, null=True)),
                ('Pasport_number', models.CharField(max_length=120, null=True)),
                ('Valid_until', models.CharField(max_length=120, null=True)),
                ('Country_issue', models.CharField(max_length=120, null=True)),
                ('Place_of_Birth', models.CharField(max_length=120, null=True)),
                ('Date_of_birth', models.CharField(max_length=120, null=True)),
                ('whats_app', models.CharField(max_length=120, null=True)),
                ('mobile', models.CharField(max_length=120, null=True)),
                ('Religion', models.CharField(max_length=120, null=True)),
                ('Marital_status', models.CharField(blank=True, max_length=120, null=True)),
                ('Highest_degree', models.CharField(max_length=120, null=True)),
                ('occupation', models.CharField(max_length=120, null=True)),
                ('Field', models.CharField(max_length=120, null=True)),
                ('Gender', models.CharField(max_length=120, null=True)),
                ('Degree_type', models.CharField(max_length=120, null=True)),
                ('picture', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='WorkingExperiengeModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(blank=True, max_length=120, null=True)),
                ('employer', models.CharField(blank=True, max_length=120, null=True)),
                ('Year_range', models.CharField(blank=True, max_length=120, null=True)),
                ('Responsibility', models.CharField(blank=True, max_length=120, null=True)),
                ('Position', models.CharField(blank=True, max_length=120, null=True)),
                ('employer2', models.CharField(blank=True, max_length=120, null=True)),
                ('Year_range2', models.CharField(blank=True, max_length=120, null=True)),
                ('Responsibility2', models.CharField(blank=True, max_length=120, null=True)),
                ('Position2', models.CharField(blank=True, max_length=120, null=True)),
                ('employer3', models.CharField(blank=True, max_length=120, null=True)),
                ('Year_range3', models.CharField(blank=True, max_length=120, null=True)),
                ('Responsibility3', models.CharField(blank=True, max_length=120, null=True)),
                ('Position3', models.CharField(blank=True, max_length=120, null=True)),
                ('employer4', models.CharField(blank=True, max_length=120, null=True)),
                ('Year_range4', models.CharField(blank=True, max_length=120, null=True)),
                ('Responsibility4', models.CharField(blank=True, max_length=120, null=True)),
                ('Position4', models.CharField(blank=True, max_length=120, null=True)),
            ],
        ),
    ]