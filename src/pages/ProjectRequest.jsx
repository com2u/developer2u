import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import GradientText from '../components/GradientText'
import StarBorder from '../components/StarBorder'

const ProjectRequest = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectDescription: '',
    requiredSkills: '',
    startDate: '',
    projectDuration: '',
    aiAgentSupport: 'yes',
    budget: '',
    attachment: null
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      attachment: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create email content
    const subject = encodeURIComponent(t('request.title'))
    const body = encodeURIComponent(`Hello,

I would like to submit a project request with the following details:

CONTACT INFORMATION:
- Name: ${formData.name}
- Company: ${formData.company}
- Email: ${formData.email}

PROJECT DETAILS:
- Project Description: ${formData.projectDescription}
- Required Skills/Technologies: ${formData.requiredSkills}
- Start Date: ${formData.startDate}
- Project Duration: ${formData.projectDuration}
- Budget Range: ${formData.budget}
- AI Agent Support Allowed: ${formData.aiAgentSupport}

${formData.attachment ? `- Attachment: ${formData.attachment.name}` : '- No attachment provided'}

Please contact me to discuss this project further.

Best regards,
${formData.name}`)

    // Open email client
    window.location.href = `mailto:info@developer2u.de?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <i className="fas fa-paper-plane text-primary mr-3"></i>
            {t('request.title')}
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="text-lg"
          >
            {t('request.subtitle')}
          </GradientText>
        </div>

        {/* Form */}
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <StarBorder
              as="div"
              className="w-full"
              color="cyan"
              speed="5s"
            >
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  <i className="fas fa-user text-primary mr-2"></i>
                  {t('request.contactInfo.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('request.contactInfo.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      placeholder={t('request.contactInfo.namePlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('request.contactInfo.company')}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      placeholder={t('request.contactInfo.companyPlaceholder')}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('request.contactInfo.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field w-full"
                      placeholder={t('request.contactInfo.emailPlaceholder')}
                    />
                  </div>
                </div>
              </div>
            </StarBorder>

            {/* Project Details */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                <i className="fas fa-project-diagram text-primary mr-2"></i>
                {t('request.projectDetails.title')}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('request.projectDetails.description')}
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={4}
                    className="input-field w-full"
                    placeholder={t('request.projectDetails.descriptionPlaceholder')}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('request.projectDetails.skills')}
                  </label>
                  <textarea
                    name="requiredSkills"
                    value={formData.requiredSkills}
                    onChange={handleInputChange}
                    rows={3}
                    className="input-field w-full"
                    placeholder={t('request.projectDetails.skillsPlaceholder')}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('request.projectDetails.startDate')}
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('request.projectDetails.duration')}
                    </label>
                    <select
                      name="projectDuration"
                      value={formData.projectDuration}
                      onChange={handleInputChange}
                      className="input-field w-full"
                    >
                      <option value="">{t('request.projectDetails.durationOptions.select')}</option>
                      <option value="1-2 weeks">{t('request.projectDetails.durationOptions.1-2weeks')}</option>
                      <option value="3-4 weeks">{t('request.projectDetails.durationOptions.3-4weeks')}</option>
                      <option value="1-2 months">{t('request.projectDetails.durationOptions.1-2months')}</option>
                      <option value="3-6 months">{t('request.projectDetails.durationOptions.3-6months')}</option>
                      <option value="6+ months">{t('request.projectDetails.durationOptions.6+months')}</option>
                      <option value="ongoing">{t('request.projectDetails.durationOptions.ongoing')}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('request.projectDetails.budget')}
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="input-field w-full"
                  >
                    <option value="">{t('request.projectDetails.budgetOptions.select')}</option>
                    <option value="Under €5,000">{t('request.projectDetails.budgetOptions.under5k')}</option>
                    <option value="€5,000 - €15,000">{t('request.projectDetails.budgetOptions.5k-15k')}</option>
                    <option value="€15,000 - €30,000">{t('request.projectDetails.budgetOptions.15k-30k')}</option>
                    <option value="€30,000 - €50,000">{t('request.projectDetails.budgetOptions.30k-50k')}</option>
                    <option value="€50,000+">{t('request.projectDetails.budgetOptions.50k+')}</option>
                    <option value="Discuss separately">{t('request.projectDetails.budgetOptions.discuss')}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* AI Support */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                <i className="fas fa-robot text-primary mr-2"></i>
                {t('request.aiEnhancement.title')}
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('request.aiEnhancement.support')}
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="aiAgentSupport"
                      value="yes"
                      checked={formData.aiAgentSupport === 'yes'}
                      onChange={handleInputChange}
                      className="mr-2 text-primary"
                    />
                    <span className="text-white">{t('request.aiEnhancement.yes')}</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="aiAgentSupport"
                      value="no"
                      checked={formData.aiAgentSupport === 'no'}
                      onChange={handleInputChange}
                      className="mr-2 text-primary"
                    />
                    <span className="text-white">{t('request.aiEnhancement.no')}</span>
                  </label>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  {t('request.aiEnhancement.info')}
                </p>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                <i className="fas fa-paperclip text-primary mr-2"></i>
                {t('request.additionalInfo.title')}
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t('request.additionalInfo.attachment')}
                </label>
                <input
                  type="file"
                  name="attachment"
                  onChange={handleFileChange}
                  className="input-field w-full"
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                />
                <p className="text-sm text-gray-400 mt-2">
                  {t('request.additionalInfo.attachmentInfo')}
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="btn-primary text-lg px-8 py-3"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                {t('request.submit.button')}
              </button>
              <p className="text-sm text-gray-400 mt-4">
                {t('request.submit.info')}
              </p>
            </div>
          </form>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="text-3xl text-primary mb-3">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{t('request.infoSection.quickResponse.title')}</h3>
            <p className="text-gray-300 text-sm">{t('request.infoSection.quickResponse.description')}</p>
          </div>
          <div className="card text-center">
            <div className="text-3xl text-secondary mb-3">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{t('request.infoSection.perfectMatch.title')}</h3>
            <p className="text-gray-300 text-sm">{t('request.infoSection.perfectMatch.description')}</p>
          </div>
          <div className="card text-center">
            <div className="text-3xl text-primary mb-3">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{t('request.infoSection.qualityAssured.title')}</h3>
            <p className="text-gray-300 text-sm">{t('request.infoSection.qualityAssured.description')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectRequest
