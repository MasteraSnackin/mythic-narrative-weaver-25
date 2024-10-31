import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './locales/en/common';
import enHome from './locales/en/home';
import esCommon from './locales/es/common';
import esHome from './locales/es/home';

const resources = {
  en: {
    common: enCommon,
    home: enHome
  },
  es: {
    common: esCommon,
    home: esHome
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;