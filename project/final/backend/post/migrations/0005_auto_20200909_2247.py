# Generated by Django 3.1 on 2020-09-09 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0004_todo_profileimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='profileImage',
            field=models.CharField(default='/media/red.jpg', max_length=500),
        ),
    ]
