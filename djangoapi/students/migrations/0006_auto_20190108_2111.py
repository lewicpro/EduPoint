# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2019-01-08 21:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0005_auto_20180820_1532'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactinfomodel',
            name='Partner',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='educationalinfomodel',
            name='Partner',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='personalinfomodel',
            name='Partner',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='workingexperiengemodel',
            name='Partner',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
    ]
