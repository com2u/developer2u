import React from 'react'

const DeveloperModal = ({ developer, onClose }) => {
  const getAvailabilityBadge = (availability) => {
    const badges = {
      'active': 'bg-secondary text-black',
      'busy': 'bg-primary text-black',
      'currently_booked': 'bg-gray-600 text-white'
    }
    const labels = {
      'active': 'Active',
      'busy': 'Busy',
      'currently_booked': 'Currently Booked'
    }
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${badges[availability]}`}>
        {labels[availability]}
      </span>
    )
  }

  const handleRequestDeveloper = () => {
    const subject = encodeURIComponent('Project Request')
    const body = encodeURIComponent(`Hello,

I would like to request ${developer.name} for my project.

Developer Details:
- Name: ${developer.name}
- Availability: ${developer.availability}
- Roles: ${developer.roles.join(', ')}
- Country: ${developer.country}

Please contact me to discuss the project details.

Best regards`)
    
    window.location.href = `mailto:info@developer2u.de?subject=${subject}&body=${body}`
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-black border border-gray-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Developer Profile</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Basic Info */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                {developer.profile_picture ? (
                  <img 
                    src={`/data/${developer.profile_picture}`}
                    alt={developer.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <i className="fas fa-user text-gray-400 text-3xl"></i>
                )}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white">{developer.name}</h3>
                {getAvailabilityBadge(developer.availability)}
              </div>
              {developer.verification.status && (
                <div className="text-secondary mb-2">
                  <i className="fas fa-check-circle mr-2"></i>
                  {developer.verification.code}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Country:</span>
                  <span className="text-white ml-2">{developer.country}</span>
                </div>
                <div>
                  <span className="text-gray-400">Total Jobs:</span>
                  <span className="text-white ml-2">{developer.total_jobs}</span>
                </div>
                {developer.education && (
                  <div className="md:col-span-2">
                    <span className="text-gray-400">Education:</span>
                    <span className="text-white ml-2">{developer.education}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">
              <i className="fas fa-language text-primary mr-2"></i>
              Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {developer.languages.map((language, index) => (
                <span 
                  key={index}
                  className="bg-accent text-white px-3 py-1 rounded-full text-sm border border-primary/20"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Roles */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">
              <i className="fas fa-briefcase text-primary mr-2"></i>
              Roles & Specializations
            </h4>
            <div className="flex flex-wrap gap-2">
              {developer.roles.map((role, index) => (
                <span 
                  key={index}
                  className="bg-primary text-black px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          {developer.tech_stack.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">
                <i className="fas fa-code text-primary mr-2"></i>
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {developer.tech_stack.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* AI Tools */}
          {developer.ai_tools.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-3">
                <i className="fas fa-robot text-primary mr-2"></i>
                AI Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {developer.ai_tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-secondary text-black px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Request Button */}
          <div className="text-center">
            <button 
              onClick={handleRequestDeveloper}
              className="btn-primary text-lg px-8 py-3"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Request Developer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeveloperModal
