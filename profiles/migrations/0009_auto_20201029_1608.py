# Generated by Django 3.1.1 on 2020-10-29 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0008_auto_20201029_1603'),
    ]

    operations = [
        migrations.AlterField(
            model_name='followingrelation',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]