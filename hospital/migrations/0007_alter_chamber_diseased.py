# Generated by Django 4.1.6 on 2023-02-13 10:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0006_remove_complaint_specialist_complaint_patient_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chamber',
            name='diseased',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='hospital.diseased_to_laboratory'),
        ),
    ]