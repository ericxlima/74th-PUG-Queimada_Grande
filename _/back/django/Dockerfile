FROM python:3.10

WORKDIR /app

ADD ./back/django /app/server/

RUN pip install --upgrade pip
RUN pip install -r server/requirements.txt

ADD ./_/back/django/wsgi-entrypoint.sh /app
