# Generated by Django 3.1.1 on 2020-10-26 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0003_profile_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='name',
            field=models.CharField(blank=True, default='hola', max_length=50),
            preserve_default=False,
        ),
    ]
