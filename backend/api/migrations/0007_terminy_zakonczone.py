# Generated by Django 5.0.6 on 2024-06-05 08:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_terminy_miasto'),
    ]

    operations = [
        migrations.AddField(
            model_name='terminy',
            name='zakonczone',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]
