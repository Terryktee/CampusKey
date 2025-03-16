# Generated by Django 5.1.6 on 2025-03-16 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Amenty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='off_campus_images/')),
            ],
        ),
        migrations.CreateModel(
            name='Rules',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rule', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video', models.FileField(upload_to='off_campus_videos/')),
            ],
        ),
        migrations.CreateModel(
            name='Campus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('latitude', models.DecimalField(decimal_places=7, max_digits=10)),
                ('longitude', models.DecimalField(decimal_places=7, max_digits=10)),
                ('price', models.DecimalField(decimal_places=2, max_digits=3)),
                ('distance', models.DecimalField(decimal_places=7, max_digits=10)),
                ('roomfor', models.IntegerField()),
                ('description', models.TextField(blank=True, null=True)),
                ('Refundable', models.BooleanField(default=False)),
                ('gender_options', models.CharField(choices=[('boys_only', 'Boys_Only'), ('girls_only', 'Girls_Only'), ('mixed', 'Mixed')], max_length=10)),
                ('blacklist', models.BooleanField(default=False)),
                ('amenties', models.ManyToManyField(to='off_campus.amenty')),
            ],
        ),
    ]
