from django.db import models

class ArticleModel(models.Model):
    """Model definition for ArticleModel."""

    # TODO: Define fields here
    title = models.CharField(max_length=50)
    content = models.TextField()

    class Meta:
        """Meta definition for ArticleModel."""

        verbose_name = 'ArticleModel'
        verbose_name_plural = 'ArticleModels'

    def __str__(self):
        """Unicode representation of ArticleModel."""
        return self.title


