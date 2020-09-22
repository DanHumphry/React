# Generated by Django 3.1 on 2020-09-08 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('content', models.TextField()),
                ('image', models.ImageField(blank=True, upload_to='post_images')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('comment', models.IntegerField(default=0)),
                ('like', models.IntegerField(default=0)),
                ('username', models.CharField(max_length=200)),
                ('language', models.CharField(max_length=200)),
            ],
        ),
    ]
