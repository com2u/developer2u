# Developer2U Deployment Guide

This guide provides detailed instructions for deploying the Developer2U platform using Docker on port 7702.

## 🐳 Docker Deployment (Recommended)

### Prerequisites
- Docker installed on your system
- Docker Compose (optional, but recommended)

### Quick Deployment with Docker Compose

1. **Clone and navigate to the project**
   ```bash
   git clone <repository-url>
   cd developer2u
   ```

2. **Deploy with Docker Compose**
   ```bash
   sudo docker-compose up -d
   ```

3. **Verify deployment**
   ```bash
   sudo docker-compose ps
   ```

4. **Access the application**
   - Open your browser and go to `http://localhost:7702`
   - Or `http://your-server-ip:7702` for remote access

### Manual Docker Deployment

1. **Build the Docker image**
   ```bash
   sudo docker build -t developer2u .
   ```

2. **Run the container**
   ```bash
   sudo docker run -d \
     --name developer2u-website \
     -p 7702:7702 \
     --restart unless-stopped \
     developer2u
   ```

3. **Check container status**
   ```bash
   sudo docker ps
   ```

### Using the Build Script

We've provided a convenient build script that handles both Docker and npm builds:

```bash
./build.sh
```

This script will:
- Check if Docker is available
- Build the Docker image if Docker is present
- Fall back to npm build if Docker is not available
- Provide clear instructions for next steps

## 🔧 Configuration

### Port Configuration
The application is configured to run on port 7702. To change this:

1. **Update docker-compose.yml**
   ```yaml
   ports:
     - "YOUR_PORT:7702"
   ```

2. **Update nginx.conf**
   ```nginx
   server {
       listen YOUR_PORT;
       # ... rest of configuration
   }
   ```

### Domain Configuration
The application supports multiple domains. Current allowed hosts:
- `localhost`
- `127.0.0.1`
- `developer2u.de`
- `developer2u.com2u.selfhost.eu`

To add more domains, update `vite.config.js`:
```javascript
allowedHosts: [
  'localhost',
  '127.0.0.1',
  'developer2u.de',
  'developer2u.com2u.selfhost.eu',
  'your-new-domain.com'
]
```

## 🚀 Production Deployment

### Server Requirements
- **CPU**: 1 core minimum, 2+ cores recommended
- **RAM**: 512MB minimum, 1GB+ recommended
- **Storage**: 1GB minimum for application and logs
- **Network**: Port 7702 accessible

### Security Considerations

1. **Firewall Configuration**
   ```bash
   # Allow port 7702
   sudo ufw allow 7702/tcp
   ```

2. **SSL/TLS Setup** (Recommended)
   - Use a reverse proxy (nginx, Apache, or Traefik)
   - Configure SSL certificates (Let's Encrypt recommended)
   - Redirect HTTP to HTTPS

3. **Docker Security**
   ```bash
   # Run container with limited privileges
   sudo docker run -d \
     --name developer2u-website \
     --user 1000:1000 \
     --read-only \
     --tmpfs /tmp \
     -p 7702:7702 \
     developer2u
   ```

### Reverse Proxy Setup (nginx)

Create `/etc/nginx/sites-available/developer2u`:

```nginx
server {
    listen 80;
    server_name developer2u.de;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name developer2u.de;

    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;

    location / {
        proxy_pass http://localhost:7702;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 📊 Monitoring & Maintenance

### Container Health Check
```bash
# Check container status
sudo docker ps

# View container logs
sudo docker logs developer2u-website

# Monitor resource usage
sudo docker stats developer2u-website
```

### Log Management
```bash
# View recent logs
sudo docker logs --tail 50 developer2u-website

# Follow logs in real-time
sudo docker logs -f developer2u-website

# Configure log rotation in docker-compose.yml
logging:
  driver: "json-file"
  options:
    max-size: "10m"
    max-file: "3"
```

### Updates and Maintenance
```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
sudo docker-compose down
sudo docker-compose up -d --build

# Or with manual Docker
sudo docker stop developer2u-website
sudo docker rm developer2u-website
sudo docker build -t developer2u .
sudo docker run -d --name developer2u-website -p 7702:7702 developer2u
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Check what's using port 7702
   sudo netstat -tulpn | grep 7702
   
   # Kill the process or change port
   sudo kill -9 <PID>
   ```

2. **Permission denied (Docker)**
   ```bash
   # Add user to docker group
   sudo usermod -aG docker $USER
   
   # Or use sudo with docker commands
   sudo docker-compose up -d
   ```

3. **Container won't start**
   ```bash
   # Check logs for errors
   sudo docker logs developer2u-website
   
   # Check container configuration
   sudo docker inspect developer2u-website
   ```

4. **Application not accessible**
   - Verify container is running: `sudo docker ps`
   - Check firewall settings: `sudo ufw status`
   - Verify port mapping: `sudo docker port developer2u-website`

### Performance Optimization

1. **Enable gzip compression** (already configured in nginx.conf)
2. **Set up CDN** for static assets
3. **Configure caching headers** (already configured)
4. **Monitor resource usage** and scale as needed

## 📞 Support

For deployment issues or questions:
- **Email**: info@developer2u.de
- **Documentation**: See README.md for general information
- **Logs**: Always include container logs when reporting issues

---

**Happy Deploying!** 🚀
