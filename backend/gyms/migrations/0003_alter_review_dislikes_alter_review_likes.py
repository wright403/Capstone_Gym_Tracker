# Generated by Django 4.0.4 on 2022-05-03 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gyms', '0002_remove_review_text_review_dislikes_review_likes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='dislikes',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='review',
            name='likes',
            field=models.IntegerField(default=2),
            preserve_default=False,
        ),
    ]