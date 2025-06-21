import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import GradientText from '../components/GradientText'
import StarBorder from '../components/StarBorder'

const About = () => {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <i className="fas fa-info-circle text-primary mr-3"></i>
            {t('about.title')}
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="text-lg max-w-3xl mx-auto"
          >
            {t('about.subtitle')}
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
              {t('about.mission.title')}
            </GradientText>
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            {t('about.mission.description')}
          </p>
        </div>

        {/* Vision & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-4">
              <i className="fas fa-eye text-primary mr-3"></i>
              {t('about.vision.title')}
            </h3>
            <div className="text-xl text-secondary font-semibold mb-4">
              {t('about.vision.slogan')}
            </div>
            <p className="text-gray-300">
              {t('about.vision.description')}
            </p>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-4">
              <i className="fas fa-star text-secondary mr-3"></i>
              {t('about.values.title')}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <i className="fas fa-check text-primary mr-3 mt-1"></i>
                <span><strong className="text-white">{t('about.values.quality.title')}:</strong> {t('about.values.quality.description')}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mr-3 mt-1"></i>
                <span><strong className="text-white">{t('about.values.transparency.title')}:</strong> {t('about.values.transparency.description')}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mr-3 mt-1"></i>
                <span><strong className="text-white">{t('about.values.innovation.title')}:</strong> {t('about.values.innovation.description')}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mr-3 mt-1"></i>
                <span><strong className="text-white">{t('about.values.partnership.title')}:</strong> {t('about.values.partnership.description')}</span>
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
              {t('about.leadership.title')}
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-user text-black text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('about.leadership.name')}</h3>
                  <p className="text-lg text-primary font-semibold">{t('about.leadership.position')}</p>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center justify-center">
                    <i className="fas fa-building text-primary mr-3"></i>
                    <span>{t('about.leadership.company')}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                    <span>{t('about.leadership.address')}</span>
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
            {t('about.whyChoose.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl text-primary mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('about.whyChoose.fastAccess.title')}</h3>
              <p className="text-gray-300 text-sm">{t('about.whyChoose.fastAccess.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-secondary mb-4">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('about.whyChoose.aiEnhanced.title')}</h3>
              <p className="text-gray-300 text-sm">{t('about.whyChoose.aiEnhanced.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-primary mb-4">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('about.whyChoose.projectBased.title')}</h3>
              <p className="text-gray-300 text-sm">{t('about.whyChoose.projectBased.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-secondary mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('about.whyChoose.vettedExperts.title')}</h3>
              <p className="text-gray-300 text-sm">{t('about.whyChoose.vettedExperts.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-primary mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('about.whyChoose.directConnection.title')}</h3>
              <p className="text-gray-300 text-sm">{t('about.whyChoose.directConnection.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-secondary mb-4">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('about.whyChoose.globalReach.title')}</h3>
              <p className="text-gray-300 text-sm">{t('about.whyChoose.globalReach.description')}</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('about.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request" className="btn-primary text-lg px-8 py-3">
              <i className="fas fa-paper-plane mr-2"></i>
              {t('about.cta.startProject')}
            </Link>
            <Link to="/developers" className="btn-secondary text-lg px-8 py-3">
              <i className="fas fa-users mr-2"></i>
              {t('about.cta.meetDevelopers')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
