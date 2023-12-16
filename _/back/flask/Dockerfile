FROM python:3.10

WORKDIR /app/back/flask

ADD ./back/flask /app/back/flask
ADD ./_/back/flask/wsgi-entrypoint.sh /app

RUN pip install --no-cache-dir -r /app/back/flask/requirements.txt