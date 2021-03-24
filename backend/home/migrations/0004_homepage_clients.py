# Generated by Django 3.1.4 on 2020-12-11 22:13

from django.db import migrations
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_auto_20201211_2212'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='clients',
            field=wagtail.core.fields.RichTextField(blank=True, help_text='list clients here. separate clients with paragraph breaks.', max_length=250, verbose_name='clients'),
        ),
    ]
