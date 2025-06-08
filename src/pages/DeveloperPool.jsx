import React, { useState, useEffect } from 'react'
import DeveloperModal from '../components/DeveloperModal'
import GradientText from '../components/GradientText'
import StarBorder from '../components/StarBorder'

const DeveloperPool = () => {
  const [developers, setDevelopers] = useState([])
  const [filteredDevelopers, setFilteredDevelopers] = useState([])
  const [selectedDeveloper, setSelectedDeveloper] = useState(null)
  const [filters, setFilters] = useState({
    orderBy: 'availability',
    searchTech: '',
    searchAI: '',
    language: '',
    country: ''
  })

  useEffect(() => {
    // Load developers data
    fetch('/data/developers.json')
      .then(response => response.json())
      .then(data => {
        setDevelopers(data.developers)
        setFilteredDevelopers(data.developers)
      })
      .catch(error => console.error('Error loading developers:', error))
  }, [])

  useEffect(() => {
    let filtered = [...developers]

    // Search filters
    if (filters.searchTech) {
      filtered = filtered.filter(dev => 
        dev.tech_stack.some(tech => 
          tech.toLowerCase().includes(filters.searchTech.toLowerCase())
        )
      )
    }

    if (filters.searchAI) {
      filtered = filtered.filter(dev => 
        dev.ai_tools.some(tool => 
          tool.toLowerCase().includes(filters.searchAI.toLowerCase())
        )
      )
    }

    if (filters.language) {
      filtered = filtered.filter(dev => 
        dev.languages.some(lang => 
          lang.toLowerCase().includes(filters.language.toLowerCase())
        )
      )
    }

    if (filters.country) {
      filtered = filtered.filter(dev => 
        dev.country.toLowerCase().includes(filters.country.toLowerCase())
      )
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.orderBy) {
        case 'availability':
          const availabilityOrder = { 'active': 0, 'busy': 1, 'currently_booked': 2 }
          return availabilityOrder[a.availability] - availabilityOrder[b.availability]
        case 'name':
          return a.name.localeCompare(b.name)
        case 'country':
          return a.country.localeCompare(b.country)
        case 'jobs':
          return b.total_jobs - a.total_jobs
        default:
          return 0
      }
    })

    setFilteredDevelopers(filtered)
  }, [developers, filters])

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
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badges[availability]}`}>
        {labels[availability]}
      </span>
    )
  }

  const truncateArray = (arr, limit = 5) => {
    if (arr.length <= limit) return arr.join(', ')
    return arr.slice(0, limit).join(', ') + ` +${arr.length - limit} more`
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <i className="fas fa-users text-primary mr-3"></i>
            Developer Pool
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="text-lg"
          >
            Browse our vetted AI-powered developers
          </GradientText>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Order By</label>
              <select 
                className="input-field w-full"
                value={filters.orderBy}
                onChange={(e) => setFilters({...filters, orderBy: e.target.value})}
              >
                <option value="availability">Availability</option>
                <option value="name">Name</option>
                <option value="country">Country</option>
                <option value="jobs">Total Jobs</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search Technology</label>
              <input 
                type="text"
                className="input-field w-full"
                placeholder="e.g. React, Python"
                value={filters.searchTech}
                onChange={(e) => setFilters({...filters, searchTech: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search AI Tools</label>
              <input 
                type="text"
                className="input-field w-full"
                placeholder="e.g. ChatGPT, LangChain"
                value={filters.searchAI}
                onChange={(e) => setFilters({...filters, searchAI: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
              <input 
                type="text"
                className="input-field w-full"
                placeholder="e.g. English, German"
                value={filters.language}
                onChange={(e) => setFilters({...filters, language: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Country</label>
              <input 
                type="text"
                className="input-field w-full"
                placeholder="e.g. Germany, India"
                value={filters.country}
                onChange={(e) => setFilters({...filters, country: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-300">
            Showing {filteredDevelopers.length} of {developers.length} developers
          </p>
        </div>

        {/* Developers Table */}
        <StarBorder
          as="div"
          className="w-full"
          color="cyan"
          speed="5s"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Developer</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Availability</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Languages</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Roles</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Tech Stack</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">AI Tools</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Country</th>
                </tr>
              </thead>
              <tbody>
                {filteredDevelopers.map((developer, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer transition-colors duration-200"
                    onClick={() => setSelectedDeveloper(developer)}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                          {developer.profile_picture ? (
                            <img 
                              src={`/data/${developer.profile_picture}`}
                              alt={developer.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <i className="fas fa-user text-gray-400"></i>
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{developer.name}</div>
                          {developer.verification.status && (
                            <div className="text-xs text-secondary">
                              <i className="fas fa-check-circle mr-1"></i>
                              {developer.verification.code}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {getAvailabilityBadge(developer.availability)}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-300">
                      {truncateArray(developer.languages, 3)}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-300">
                      {developer.roles.join(', ')}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-300">
                      {truncateArray(developer.tech_stack, 5)}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-300">
                      {truncateArray(developer.ai_tools, 3)}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-300">
                      {developer.country}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </StarBorder>

        {filteredDevelopers.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-search text-4xl text-gray-600 mb-4"></i>
            <p className="text-gray-400 text-lg">No developers found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Developer Modal */}
      {selectedDeveloper && (
        <DeveloperModal 
          developer={selectedDeveloper}
          onClose={() => setSelectedDeveloper(null)}
        />
      )}
    </div>
  )
}

export default DeveloperPool
