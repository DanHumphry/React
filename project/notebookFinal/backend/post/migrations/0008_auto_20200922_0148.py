# Generated by Django 3.1 on 2020-09-22 01:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0007_todo_date'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Borad',
        ),
        migrations.DeleteModel(
            name='Post',
        ),
    ]
