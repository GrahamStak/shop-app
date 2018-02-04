from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'b5)yvi60@9_n30c$y-dxlsm!rvh))fu_72gy-uflk&!uf-zad*'

DEBUG = env.bool('DJANGO_DEBUG', default=True)