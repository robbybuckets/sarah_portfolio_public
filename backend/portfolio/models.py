from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField, StreamField
from wagtail.core import blocks
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.api import APIField
from wagtail.images.blocks import ImageChooserBlock


class Project(Page):
    client = models.CharField(('client'), max_length=50)
    card_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    card_description = models.CharField(
        'card description',
        max_length=75,
        help_text='this is the short description that will appear in the project card on both the main slider and other work card deck.',
        blank=True
    )
    full_description = models.TextField(
        ('full description'),
        max_length=500,
        help_text='this is the longer description that will show up beneath the slider on the project detail page.',
        blank=True
    )
    project_credits = RichTextField(
        ('project credits'),
        max_length=250,
        help_text='these are the credits that will show up beneath the slider on the project detail page. please put credits in list format.',
        blank=True
    )
    media_gallery = StreamField(
        [
            ('image', ImageChooserBlock(required=True)),
            ('video', blocks.CharBlock(required=True, help_text='paste video url here')),
        ],
        null=True,
        blank=True
    )

    content_panels = Page.content_panels + [
        FieldPanel('client'),
        ImageChooserPanel('card_image'),
        FieldPanel('card_description'),
        FieldPanel('full_description'),
        FieldPanel('project_credits'),
        StreamFieldPanel('media_gallery'),
    ]

    api_fields = [
        APIField('client'),
        APIField('card_image'),
        APIField('card_description'),
        APIField('full_description'),
        APIField('project_credits'),
        APIField('media_gallery'),
    ]