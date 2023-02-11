# Generated by Django 4.1.6 on 2023-02-11 12:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0002_remove_account_role_account_address_account_birthday'),
    ]

    operations = [
        migrations.CreateModel(
            name='Specialist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=221)),
                ('price', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('account_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('role', models.IntegerField(choices=[(0, 'Labarant'), (1, 'Doctor')], default=0)),
                ('specialist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hospital.specialist')),
            ],
            options={
                'abstract': False,
            },
            bases=('accounts.account',),
        ),
    ]
