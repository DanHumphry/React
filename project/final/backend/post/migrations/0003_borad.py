# Generated by Django 3.1 on 2020-09-08 15:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_todo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Borad',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField()),
                ('image', models.ImageField(blank=True, upload_to='board_images')),
                ('comment', models.IntegerField(default=0)),
                ('like', models.IntegerField(default=0)),
                ('view', models.IntegerField(default=0)),
                ('username', models.CharField(max_length=200)),
            ],
        ),
    ]
