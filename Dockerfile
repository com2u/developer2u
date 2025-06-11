# Use Node.js 18 Alpine as base image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Use nginx to serve the built application
FROM nginx:alpine

# Copy built files to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy data directory to nginx html directory
COPY --from=build /app/data /usr/share/nginx/html/data

# Copy public directory (robots.txt, sitemap.xml) to nginx html directory
COPY --from=build /app/public /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 7702
EXPOSE 7702

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
