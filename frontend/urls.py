from django.urls import path

from .views import index, exam07, exam08, exam09, exam10, exam11, exam12

from django.urls import path


urlpatterns = [
    path("exam07", exam07),  # js/ 경로를 처리
    path("exam07/<path:subpath>/", exam07),  # js/하위 경로 처리
    path("exam08", exam08),  # js/ 경로를 처리
    path("exam08/<path:subpath>/", exam08),  # js/하위 경로 처리
    path("exam09", exam09),  # js/ 경로를 처리
    path("exam09/<path:subpath>/", exam10),  # js/하위 경로 처리
    path("exam10", exam10),  # js/ 경로를 처리
    path("exam10/<path:subpath>/", exam10),  # js/하위 경로 처리
    path("exam11", exam11),  # js/ 경로를 처리
    path("exam11/<path:subpath>/", exam11),  # js/하위 경로 처리
    path("exam12", exam12),  # js/ 경로를 처리
    path("exam12/<path:subpath>/", exam12),  # js/하위 경로 처리
    path("", index, name="home"),  # 기본 경로 처리
    path("<path:path>/", index, name="catch_all"),  # 나머지 모든 경로 처리
]
