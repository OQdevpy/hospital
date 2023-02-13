# Generated by Django 4.1.6 on 2023-02-13 09:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0005_remove_diseased_order_time_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='complaint',
            name='specialist',
        ),
        migrations.AddField(
            model_name='complaint',
            name='patient',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='hospital.diseased'),
        ),
        migrations.AlterField(
            model_name='complaint',
            name='doctor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='hospital.doctor'),
        ),
    ]
