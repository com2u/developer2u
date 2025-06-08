import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'
import StarBorder from '../components/StarBorder'

const About = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <i className="fas fa-info-circle text-primary mr-3"></i>
            About Developer2U
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="text-lg max-w-3xl mx-auto"
          >
            We believe modern projects require flexible, AI-powered expertise. That's exactly what we deliver.
          </GradientText>
        </div>

        {/* Mission Statement */}
        <div className="card mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={8}
              showBorder={false}
            >
              Developers aren't resources — they're partners.
            </GradientText>
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            We are using modern AI tools during development to provide best quality and fast delivery.
            Our platform connects companies with experienced software developers who work on a project basis 
            and use state-of-the-art AI tools and autonomous agents.
          </p>
        </div>

        {/* Vision & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-4">
              <i className="fas fa-eye text-primary mr-3"></i>
              Our Vision
            </h3>
            <div className="text-xl text-secondary font-semibold mb-4">
              "Top developers. No bureaucracy."
            </div>
            <p className="text-gray-300">
              We envision a world where companies can access top-tier development talent instantly, 
              without the overhead of traditional hiring processes. Our platform eliminates bureaucracy 
              and connects you directly with skilled professionals who can start contributing immediately.
            </p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-4">
              <i className="fas fa-star text-secondary mr-3"></i>
              Our Values
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <i className="fas fa-check text-primary mr-3 mt-1"></i>
                <span><strong className="text-white">Quality:</strong> Focus on AI competence and technical excellence</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mr-3 mt-1"></i>
                <span><strong className="text-white">Transparency:</strong> Fair and open processes for both clients and developers</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mr-3 mt-1"></i>
                <span><strong className="text-white">Innovation:</strong> Embracing cutting-edge AI tools and methodologies</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mr-3 mt-1"></i>
                <span><strong className="text-white">Partnership:</strong> Building lasting relationships, not just transactions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership */}
        <StarBorder
          as="div"
          className="w-full mb-12"
          color="cyan"
          speed="5s"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              <i className="fas fa-user-tie text-primary mr-3"></i>
              Who is behind developer2u.de?
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-user text-black text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Patrick Hess</h3>
                  <p className="text-lg text-primary font-semibold">CEO of Com2u.de</p>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center justify-center">
                    <i className="fas fa-building text-primary mr-3"></i>
                    <span>Com2u.de</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                    <span>Frohschammerstr. 6, 80807 Munich, Germany</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="fas fa-envelope text-primary mr-3"></i>
                    <a href="mailto:info@developer2u.de" className="text-secondary hover:text-primary transition-colors duration-200">
                      info@developer2u.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StarBorder>

        {/* Why Choose Us */}
        <div className="bg-gray-900/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Why Choose Developer2U?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl text-primary mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Access</h3>
              <p className="text-gray-300 text-sm">Companies gain fast access to vetted experts without long-term commitments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-secondary mb-4">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Enhanced</h3>
              <p className="text-gray-300 text-sm">All developers use state-of-the-art AI tools and autonomous agents</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-primary mb-4">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Project-Based</h3>
              <p className="text-gray-300 text-sm">Flexible engagement model that adapts to your project needs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-secondary mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Vetted Experts</h3>
              <p className="text-gray-300 text-sm">All developers are thoroughly screened for technical skills and reliability</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-primary mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Direct Connection</h3>
              <p className="text-gray-300 text-sm">Work directly with developers without intermediaries or hidden fees</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-secondary mb-4">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-gray-300 text-sm">Access to international talent pool with diverse expertise</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join the companies that are already benefiting from AI-powered development expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request" className="btn-primary text-lg px-8 py-3">
              <i className="fas fa-paper-plane mr-2"></i>
              Start Your Project
            </Link>
            <Link to="/developers" className="btn-secondary text-lg px-8 py-3">
              <i className="fas fa-users mr-2"></i>
              Meet Our Developers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
