# Generated by Django 3.1.4 on 2020-12-11 22:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_homepage_clients'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='email',
            field=models.CharField(blank=True, max_length=50, verbose_name='email'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='instagram',
            field=models.CharField(blank=True, max_length=50, verbose_name='instagram'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='linkedin',
            field=models.CharField(blank=True, max_length=50, verbose_name='linkedin'),
        ),
    ]
