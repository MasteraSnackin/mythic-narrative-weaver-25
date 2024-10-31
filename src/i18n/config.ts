import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language files to keep config.ts smaller
import en from './locales/en';
import es from './locales/es';
import fr from './locales/fr';
import zh from './locales/zh';

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  zh: { translation: zh }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
