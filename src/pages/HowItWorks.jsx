import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import GradientText from '../components/GradientText'
import StarBorder from '../components/StarBorder'

const HowItWorks = () => {
  const { t } = useTranslation()
  const steps = [
    {
      number: 1,
      icon: 'fas fa-paper-plane',
      title: t('process.steps.step1.title'),
      description: t('process.steps.step1.description'),
      details: t('process.steps.step1.details')
    },
    {
      number: 2,
      icon: 'fas fa-search',
      title: t('process.steps.step2.title'),
      description: t('process.steps.step2.description'),
      details: t('process.steps.step2.details')
    },
    {
      number: 3,
      icon: 'fas fa-rocket',
      title: t('process.steps.step3.title'),
      description: t('process.steps.step3.description'),
      details: t('process.steps.step3.details')
    },
    {
      number: 4,
      icon: 'fas fa-comments',
      title: t('process.steps.step4.title'),
      description: t('process.steps.step4.description'),
      details: t('process.steps.step4.details')
    },
    {
      number: 5,
      icon: 'fas fa-check-circle',
      title: t('process.steps.step5.title'),
      description: t('process.steps.step5.description'),
      details: t('process.steps.step5.details')
    }
  ]

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <i className="fas fa-cogs text-primary mr-3"></i>
            {t('process.title')}
          </h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="text-lg mb-6"
          >
            {t('process.subtitle1')}
          </GradientText>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="text-xl max-w-3xl mx-auto"
          >
            {t('process.subtitle2')}
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
              {t('process.benefits.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl text-primary mb-3">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('process.benefits.items.fastTurnaround.title')}</h3>
                <p className="text-gray-300 text-sm">{t('process.benefits.items.fastTurnaround.description')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-secondary mb-3">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('process.benefits.items.vettedProfessionals.title')}</h3>
                <p className="text-gray-300 text-sm">{t('process.benefits.items.vettedProfessionals.description')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-primary mb-3">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('process.benefits.items.aiEnhanced.title')}</h3>
                <p className="text-gray-300 text-sm">{t('process.benefits.items.aiEnhanced.description')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-secondary mb-3">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('process.benefits.items.directConnection.title')}</h3>
                <p className="text-gray-300 text-sm">{t('process.benefits.items.directConnection.description')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-primary mb-3">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('process.benefits.items.noHiddenFees.title')}</h3>
                <p className="text-gray-300 text-sm">{t('process.benefits.items.noHiddenFees.description')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-secondary mb-3">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t('process.benefits.items.globalTalent.title')}</h3>
                <p className="text-gray-300 text-sm">{t('process.benefits.items.globalTalent.description')}</p>
              </div>
            </div>
          </div>
        </StarBorder>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('process.cta.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('process.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request" className="btn-primary text-lg px-8 py-3">
              <i className="fas fa-paper-plane mr-2"></i>
              {t('process.cta.startProject')}
            </Link>
            <Link to="/developers" className="btn-secondary text-lg px-8 py-3">
              <i className="fas fa-users mr-2"></i>
              {t('process.cta.browseDevelopers')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
