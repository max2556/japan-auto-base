#!/bin/bash

IMAGE_NAME="japancar-frontend"

docker stop $IMAGE_NAME || true
docker rm $IMAGE_NAME || true

docker build -t $IMAGE_NAME .

docker run -d -p 3001:3000 --name $IMAGE_NAME $IMAGE_NAME
