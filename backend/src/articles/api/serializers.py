from rest_framework import serializers
from articles.models import ArticleModel

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleModel
        fields = ("id","title", "content")
