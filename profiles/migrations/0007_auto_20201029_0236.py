# Generated by Django 3.1.1 on 2020-10-28 23:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0006_auto_20201029_0158'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='following',
            field=models.ManyToManyField(blank=True, related_name='followers', through='profiles.FollowingRelation', to='profiles.Profile'),
        ),
    ]
