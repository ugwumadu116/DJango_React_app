from rest_framework.generics import ListAPIView, RetrieveAPIView
from articles.models import ArticleModel
from .serializers import ArticleSerializer

class ArticleListViews(ListAPIView):
    queryset = ArticleModel.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailsViews(RetrieveAPIView):
    queryset = ArticleModel.objects.all()
    serializer_class = ArticleSerializer
