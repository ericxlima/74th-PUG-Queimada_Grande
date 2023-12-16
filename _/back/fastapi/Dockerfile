FROM python:3.10

WORKDIR /app/back/fastapi

ADD ./back/fastapi /app/back/fastapi
ADD ./_/back/fastapi/wsgi-entrypoint.sh /app

RUN pip install --no-cache-dir -r /app/back/fastapi/requirements.txt