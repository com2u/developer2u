import React from 'react'
import { Link } from 'react-router-dom'
import LetterGlitch from '../components/LetterGlitch'
import GradientText from '../components/GradientText'

const Home = () => {
  const benefits = [
    {
      icon: 'fas fa-bolt',
      title: 'On-demand access to expert developers',
      description: 'Get immediate access to vetted professionals ready to start your project'
    },
    {
      icon: 'fas fa-robot',
      title: 'Increased efficiency through AI agents',
      description: 'Our developers leverage cutting-edge AI tools to deliver faster results'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Developers with extensive project experience',
      description: 'Work with professionals who have proven track records across industries'
    },
    {
      icon: 'fas fa-handshake',
      title: 'No commission fees – direct booking',
      description: 'Connect directly with developers without hidden fees or middleman costs'
    }
  ]

  const techStack = [
    { category: 'Modern stacks', items: ['React', 'Vue', 'Node.js', 'Vite.js', 'Tailwind.css', 'Python'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'GitLab CI/CD'] },
    { category: 'Testing', items: ['Playwright', 'Cypress', 'Selenium'] },
    { category: 'AI/Automation', items: ['VSCode+Cline', 'GitHub Copilot', 'CrewAI', 'LangChain'] },
    { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Vercel'] },
    { category: 'Project Tools', items: ['Jira', 'Confluence', 'Miro'] }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* LetterGlitch Background covering entire hero section */}
        <div className="absolute inset-0 w-full h-full">
          <LetterGlitch
            glitchSpeed={10}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
            glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          />
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/data/Logo.png" 
              alt="Developer2U Logo" 
              className="h-24 md:h-32 w-auto relative z-20"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-20">
            Developer2U
          </h1>
          <div className="mb-8 relative z-20">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={8}
              showBorder={false}
              className="text-xl md:text-2xl"
            >
              We bring AI-powered developers to you!
            </GradientText>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <Link to="/developers" className="btn-primary text-lg px-8 py-3">
              <i className="fas fa-users mr-2"></i>
              Browse Developers
            </Link>
            <Link to="/request" className="btn-secondary text-lg px-8 py-3">
              <i className="fas fa-paper-plane mr-2"></i>
              Start Project
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of External Developers
            </h2>
            <p className="text-lg text-gray-300">
              Dynamic allocation to your project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl text-primary mb-4">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Tools and Autonomous Agents
            </h2>
            <p className="text-lg text-secondary mb-6">
              Top developers. Project-based. AI-enhanced.
            </p>
            <p className="text-gray-300 max-w-4xl mx-auto">
              At developer2u.de, you'll find vetted software developers who leverage cutting-edge AI 
              tools and agents to elevate your software projects — fast, flexible, and efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Development Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modern Development Stack
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  <i className="fas fa-code text-primary mr-2"></i>
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="bg-accent text-white px-3 py-1 rounded-full text-sm border border-primary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Connect with AI-powered developers today and accelerate your software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request" className="btn-primary text-lg px-8 py-3">
              <i className="fas fa-rocket mr-2"></i>
              Request Developer
            </Link>
            <Link to="/process" className="btn-secondary text-lg px-8 py-3">
              <i className="fas fa-info-circle mr-2"></i>
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
