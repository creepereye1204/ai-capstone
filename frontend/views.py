from django.shortcuts import render

# Create your views here.


def index(request, *callback_args, **callback_kwargs):
    return render(request, "frontend/index.html")


def exam07(request, *callback_args, **callback_kwargs):
    return render(request, "frontend/ch4/exam07.html")


def exam08(request, *callback_args, **callback_kwargs):
    return render(request, "frontend/ch4/exam08.html")


def exam09(request, *callback_args, **callback_kwargs):
    return render(request, "frontend/ch4/exam09.html")


def exam10(request, *callback_args, **callback_kwargs):
    return render(request, "frontend/ch4/exam10.html")


def exam11(request, *callback_args, **callback_kwargs):
    return render(request, "frontend/ch4/exam11.html")


def exam12(request, *callback_args, **callback_kwargs):
    return render(request, "frontend/ch4/exam12.html")
