# Generated by Django 4.1.2 on 2023-02-02 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("EMS", "0002_remove_employees_age"),
    ]

    operations = [
        migrations.AddField(
            model_name="employees",
            name="Age",
            field=models.IntegerField(default=20),
            preserve_default=False,
        ),
    ]
