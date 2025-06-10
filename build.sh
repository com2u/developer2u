#!/bin/bash

echo "🚀 Building Developer2U Application..."

# Check if Docker is available
if command -v docker &> /dev/null; then
    echo "📦 Building Docker image..."
    sudo docker build -t developer2u .
    
    if [ $? -eq 0 ]; then
        echo "✅ Docker image built successfully!"
        echo "🐳 To run the container:"
        echo "   sudo docker run -d -p 7702:7702 --name developer2u-website developer2u"
        echo "   Or use docker-compose: sudo docker-compose up -d"
    else
        echo "❌ Docker build failed!"
        exit 1
    fi
else
    echo "⚠️  Docker not found. Please install Docker to use containerized deployment."
    echo "📦 Building with npm instead..."
    
    if command -v npm &> /dev/null; then
        npm run build
        if [ $? -eq 0 ]; then
            echo "✅ Application built successfully!"
            echo "📁 Built files are in the 'dist' directory"
            echo "🌐 You can serve them with any web server on port 7702"
        else
            echo "❌ npm build failed!"
            exit 1
        fi
    else
        echo "❌ Neither Docker nor npm found. Please install one of them."
        exit 1
    fi
fi
