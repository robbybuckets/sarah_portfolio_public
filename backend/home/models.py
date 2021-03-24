from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel

from wagtail.api import APIField


class HomePage(Page):
    bio = RichTextField(('bio'), max_length=750, blank=True)
    clients = RichTextField(('clients'), max_length=250, help_text='list clients here. separate clients with paragraph breaks.', blank=True)
    email = models.CharField(('email'), max_length=50, blank=True)
    linkedin = models.CharField(('linkedin'), max_length=50, blank=True)
    instagram = models.CharField(('instagram'), max_length=50, blank=True)

    max_count = 1

    content_panels = Page.content_panels + [
        FieldPanel('bio', classname="full"),
        FieldPanel('clients'),
        FieldPanel('email'),
        FieldPanel('linkedin'),
        FieldPanel('instagram'),
    ]

    api_fields = [
        APIField('bio'),
        APIField('clients'),
        APIField('email'),
        APIField('linkedin'),
        APIField('instagram'),
    ]