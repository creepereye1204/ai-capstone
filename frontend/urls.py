from django.urls import path, re_path

from .views import index

from django.urls import path

urlpatterns = [
    # re_path(r'^board/\d+/?$', index),  # board/숫자 또는 board/숫자/ 경로 처리
    path('', index),  # 0개 이상의 문자로 이루어진 경로
    path('<path:path>', index),  # 모든 경로를 React로 전달
]

