# Generated by Django 3.1.4 on 2020-12-11 23:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0022_uploadedimage'),
        ('portfolio', '0004_project_media_gallery'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='card_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.image'),
        ),
    ]
