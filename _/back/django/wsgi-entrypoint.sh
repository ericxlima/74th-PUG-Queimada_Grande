#!/bin/sh

until cd /app/server
do
    echo "Waiting for server volume..."
done

DEBUG=True ./manage.py runserver 0.0.0.0:8001