# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-08-20 15:32
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0004_partnersmodel'),
    ]

    operations = [
        migrations.RenameField(
            model_name='partnersmodel',
            old_name='name',
            new_name='named',
        ),
    ]