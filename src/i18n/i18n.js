import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import language files
import enTranslation from './locales/en.json';
import deTranslation from './locales/de.json';

// Configure i18next
i18n
  // Use language detector to detect browser language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      de: {
        translation: deTranslation
      }
    },
    fallbackLng: 'en', // Default language if detection fails
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'], // Detection methods in order of preference
      lookupQuerystring: 'lng', // Query parameter to look for language (?lng=en)
      caches: ['localStorage'], // Cache language selection in localStorage
    },
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
