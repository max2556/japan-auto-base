#!/bin/bash

IMAGE_NAME="japancar-frontend"

echo "Building the Docker image..."
docker build -t $IMAGE_NAME .

echo "Running the Docker container..."
docker run -d -p 3001:3000 --name frontend-container $IMAGE_NAME
