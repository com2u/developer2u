# Developer2U - AI-Powered Developer Platform

A modern, responsive web platform that connects companies with experienced software developers who leverage cutting-edge AI tools and autonomous agents for enhanced productivity and quality.

## 🚀 Project Overview

Developer2U is a revolutionary platform designed to bridge the gap between companies seeking top-tier development talent and skilled developers who embrace AI-enhanced workflows. Our platform eliminates traditional hiring bureaucracy and enables direct, project-based collaborations.

### Key Features

- **AI-Enhanced Development**: All developers use state-of-the-art AI tools and autonomous agents
- **Project-Based Work**: Flexible, commitment-free engagements
- **Vetted Professionals**: All developers are thoroughly verified and experienced
- **Direct Booking**: No commission fees, transparent pricing
- **Modern Tech Stack**: Cutting-edge technologies and methodologies

## 🎨 Design & Technology

### Tech Stack
- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Typography**: JetBrains Mono font
- **Deployment**: Docker with Nginx

### Design System
- **Background**: Black (#000000)
- **Primary Text**: White (#FFFFFF)
- **Primary Color**: #61b3dc (Blue)
- **Secondary Color**: #61dca3 (Green)
- **Accent Color**: #2b4539 (Dark Green)
- **Design Philosophy**: Clean, modern, minimalist with subtle animations

### Visual Effects
- **StarBorder Component**: Animated cyan borders around key sections
- **GradientText Component**: Dynamic gradient text animations
- **GlitchText Component**: Cyberpunk-style text effects
- **Responsive Design**: Mobile-first approach with seamless desktop scaling

## 📱 Pages & Features

### 1. Homepage
- Hero section with compelling value proposition
- Benefits of AI-powered external developers
- Modern development stack showcase
- Call-to-action for project requests

### 2. Developer Pool
- Interactive table of verified developers
- Advanced filtering and search capabilities
- Developer profiles with skills, availability, and verification status
- Modal dialogs for detailed developer information

### 3. How It Works
- 5-step process explanation
- Benefits and value propositions
- Timeline expectations
- Collaboration methodology

### 4. Project Request
- Comprehensive project submission form
- Optional and required field validation
- File upload capabilities
- Automated email generation to info@developer2u.de

### 5. About Us
- Company vision and mission
- Leadership information (Patrick Hess, CEO)
- Contact details and location
- Core values and principles

## 🐳 Docker Deployment

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd developer2u
   ```

2. **Deploy with the deployment script (Recommended)**
   ```bash
   ./deploy.sh
   ```
   *This script tries docker-compose first, then falls back to manual Docker commands if needed.*

3. **Or use manual Docker build (Most Reliable)**
   ```bash
   sudo docker build -t developer2u .
   sudo docker run -d -p 7702:7702 --name developer2u-website --restart unless-stopped developer2u
   ```

4. **Or try Docker Compose (if compatible)**
   ```bash
   sudo docker-compose up --build -d
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:7702`

### Manual Docker Build (Alternative Method)

```bash
# Build the Docker image
sudo docker build -t developer2u .

# Run the container
sudo docker run -d -p 7702:7702 --name developer2u-website --restart unless-stopped developer2u

# Check status
sudo docker ps

# View logs
sudo docker logs -f developer2u-website
```

### Docker Configuration

- **Port**: 7702 (configurable)
- **Web Server**: Nginx Alpine
- **Build Process**: Multi-stage build for optimized image size
- **Features**: Gzip compression, security headers, static asset caching

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Domain Configuration

The application is configured to work with multiple domains:
- `localhost` (development)
- `127.0.0.1` (local testing)
- `developer2u.de` (production domain)
- `developer2u.com2u.selfhost.eu` (staging/alternative domain)

## 📊 Developer Data

Developer profiles are managed through `data/developers.json` with the following structure:

```json
{
  "developers": [
    {
      "profile_picture": "path/to/image.png",
      "name": "Developer Name",
      "availability": "active|available_soon|currently_booked",
      "languages": ["English", "German"],
      "roles": ["Frontend", "Backend", "DevOps"],
      "tech_stack": ["React", "Node.js", "Docker"],
      "ai_tools": ["ChatGPT", "GitHub Copilot"],
      "verification": {
        "status": true,
        "code": "Verified XXX"
      },
      "total_jobs": 0,
      "education": "M.Sc. Computer Science",
      "country": "Germany"
    }
  ]
}
```

## 🚀 Deployment Options

### Production Deployment

1. **Using Docker Compose (Recommended)**
   ```bash
   sudo docker-compose up -d
   ```

2. **Using Docker directly**
   ```bash
   sudo docker build -t developer2u .
   sudo docker run -d -p 7702:7702 developer2u
   ```

3. **Traditional hosting**
   ```bash
   npm run build
   # Deploy dist/ folder to your web server
   ```

### Environment Variables

- `NODE_ENV=production` (set automatically in Docker)
- Custom domains can be added to `vite.config.js`

## 📞 Contact & Support

- **Website**: developer2u.de
- **Email**: info@developer2u.de
- **CEO**: Patrick Hess
- **Address**: Frohschammerstr. 6, 80807 Munich, Germany

## 📄 License

This project is proprietary software owned by Com2u.de.

## 🔄 Updates & Maintenance

The platform is actively maintained with regular updates to:
- Developer profiles and availability
- Technology stack information
- UI/UX improvements
- Security enhancements
- Performance optimizations

---

**Developer2U** - *Top developers. Project-based. AI-enhanced.*
