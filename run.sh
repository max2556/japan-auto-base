#!/bin/bash

IMAGE_NAME="japancar-frontend"

docker stop japancar-frontend || true
docker rm japancar-frontend || true

docker build -t $IMAGE_NAME .

docker run -d -p 3001:3000 --name frontend-container $IMAGE_NAME
