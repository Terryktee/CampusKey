# Generated by Django 5.1.6 on 2025-03-16 18:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('off_campus', '0001_initial'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='campus',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='houses', to='users.landlord'),
        ),
        migrations.AddField(
            model_name='campus',
            name='image',
            field=models.ManyToManyField(to='off_campus.image'),
        ),
        migrations.AddField(
            model_name='campus',
            name='rules',
            field=models.ManyToManyField(to='off_campus.rules'),
        ),
        migrations.AddField(
            model_name='campus',
            name='videos',
            field=models.ManyToManyField(to='off_campus.video'),
        ),
    ]
