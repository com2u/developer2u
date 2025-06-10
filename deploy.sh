#!/bin/bash

echo "🚀 Deploying Developer2U Application..."

# Stop and remove existing containers
echo "🧹 Cleaning up existing containers..."
sudo docker stop developer2u-website 2>/dev/null || true
sudo docker rm developer2u-website 2>/dev/null || true

# Remove old images to force rebuild
echo "🗑️  Removing old images..."
sudo docker image rm developer2u_developer2u 2>/dev/null || true
sudo docker image rm developer2u 2>/dev/null || true

# Try docker-compose first
echo "🔨 Attempting deployment with docker-compose..."
if sudo docker-compose up --build -d 2>/dev/null; then
    echo "✅ Docker Compose deployment successful!"
    echo "🌐 Application is running at: http://localhost:7702"
    echo "📊 Check status with: sudo docker-compose ps"
    echo "📝 View logs with: sudo docker-compose logs -f"
else
    echo "⚠️  Docker Compose failed, trying manual Docker build..."
    
    # Build the image
    echo "🔨 Building Docker image..."
    if sudo docker build -t developer2u .; then
        echo "✅ Docker image built successfully!"
        
        # Run the container
        echo "🚀 Starting container..."
        if sudo docker run -d --name developer2u-website -p 7702:7702 --restart unless-stopped developer2u; then
            echo "✅ Manual Docker deployment successful!"
            echo "🌐 Application is running at: http://localhost:7702"
            echo "📊 Check status with: sudo docker ps"
            echo "📝 View logs with: sudo docker logs -f developer2u-website"
        else
            echo "❌ Failed to start container!"
            echo "📝 Check logs with: sudo docker logs developer2u-website"
            exit 1
        fi
    else
        echo "❌ Failed to build Docker image!"
        exit 1
    fi
fi
