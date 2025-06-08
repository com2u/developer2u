import React from 'react'
import { Link } from 'react-router-dom'
import GradientText from '../components/GradientText'
import StarBorder from '../components/StarBorder'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: 'fas fa-paper-plane',
      title: 'Submit Request',
      description: 'Describe your project or development needs.',
      details: 'Tell us about your project requirements, timeline, and specific technologies you need. Our simple form makes it easy to communicate your vision.'
    },
    {
      number: 2,
      icon: 'fas fa-search',
      title: 'Matching',
      description: 'We suggest the most suitable developers.',
      details: 'Our team reviews your requirements and matches you with developers who have the right skills, experience, and availability for your project.'
    },
    {
      number: 3,
      icon: 'fas fa-rocket',
      title: 'Kickoff',
      description: 'Start immediately — you will define your requirements.',
      details: 'Once matched, you can start working with your developer right away. Define project scope, milestones, and communication preferences.'
    },
    {
      number: 4,
      icon: 'fas fa-comments',
      title: 'Collaboration',
      description: 'Transparent, AI-assisted communication.',
      details: 'Work together using modern collaboration tools. Our developers leverage AI to enhance productivity and deliver high-quality results faster.'
    },
    {
      number: 5,
      icon: 'fas fa-check-circle',
      title: 'Completion',
      description: 'Project wrap-up and invoicing.',
      details: 'Review deliverables, provide feedback, and complete your project. Simple, transparent invoicing with no hidden fees.'
    }
  ]

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <i className="fas fa-cogs text-primary mr-3"></i>
            How It Works
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="text-lg mb-6"
          >
            From idea to success in 3 days
          </GradientText>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="text-xl max-w-3xl mx-auto"
          >
            You describe your needs — we deliver the right developer. No recruiting. No delays.
          </GradientText>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform translate-x-4 z-0"></div>
                )}
                
                {/* Step Card */}
                <div className="card text-center relative z-10">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl text-primary mb-4">
                    <i className={step.icon}></i>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-secondary font-medium mb-3">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <p className="text-gray-300 text-sm">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <StarBorder
          as="div"
          className="w-full mb-12"
          color="cyan"
          speed="5s"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Why Choose Developer2U?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl text-primary mb-3">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Turnaround</h3>
                <p className="text-gray-300 text-sm">Get matched with developers in hours, not weeks</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-secondary mb-3">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Vetted Professionals</h3>
                <p className="text-gray-300 text-sm">All developers are thoroughly screened and verified</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-primary mb-3">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI-Enhanced</h3>
                <p className="text-gray-300 text-sm">Developers use cutting-edge AI tools for better results</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-secondary mb-3">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Direct Connection</h3>
                <p className="text-gray-300 text-sm">Work directly with developers, no middleman</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-primary mb-3">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No Hidden Fees</h3>
                <p className="text-gray-300 text-sm">Transparent pricing with no commission charges</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-secondary mb-3">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Global Talent</h3>
                <p className="text-gray-300 text-sm">Access developers from around the world</p>
              </div>
            </div>
          </div>
        </StarBorder>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join hundreds of companies who trust Developer2U for their development needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request" className="btn-primary text-lg px-8 py-3">
              <i className="fas fa-paper-plane mr-2"></i>
              Start Your Project
            </Link>
            <Link to="/developers" className="btn-secondary text-lg px-8 py-3">
              <i className="fas fa-users mr-2"></i>
              Browse Developers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
