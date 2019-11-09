from django.urls import path
from .views import ArticleDetailsViews, ArticleListViews

urlpatterns = [
    path("", ArticleListViews.as_view()),
    path("<pk>", ArticleDetailsViews.as_view())
]
