# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2019-01-09 06:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0009_personalinfomodel_university'),
    ]

    operations = [
        migrations.AddField(
            model_name='personalinfomodel',
            name='Date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
