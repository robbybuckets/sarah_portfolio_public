# Generated by Django 3.1.4 on 2020-12-13 20:20

from django.db import migrations
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_auto_20201211_2216'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='bio',
            field=wagtail.core.fields.RichTextField(blank=True, max_length=750, verbose_name='bio'),
        ),
    ]
