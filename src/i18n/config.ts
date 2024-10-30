import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Get Started": "Get Started",
      "Story Library": "Story Library",
      "Pricing": "Pricing",
      "Contact": "Contact",
      "Start Reading": "Start Reading",
      "Search stories": "Search stories",
      "Filters": "Filters",
      "Free Explorer": "Free Explorer",
      "Story Weaver": "Story Weaver",
      "Education Pro": "Education Pro",
      "Subscribe Now": "Subscribe Now",
      "Contact Sales": "Contact Sales",
    }
  },
  es: {
    translation: {
      "Get Started": "Comenzar",
      "Story Library": "Biblioteca de Historias",
      "Pricing": "Precios",
      "Contact": "Contacto",
      "Start Reading": "Empezar a Leer",
      "Search stories": "Buscar historias",
      "Filters": "Filtros",
      "Free Explorer": "Explorador Gratuito",
      "Story Weaver": "Tejedor de Historias",
      "Education Pro": "Educación Pro",
      "Subscribe Now": "Suscribirse Ahora",
      "Contact Sales": "Contactar Ventas",
    }
  },
  fr: {
    translation: {
      "Get Started": "Commencer",
      "Story Library": "Bibliothèque d'Histoires",
      "Pricing": "Tarifs",
      "Contact": "Contact",
      "Start Reading": "Commencer la Lecture",
      "Search stories": "Rechercher des histoires",
      "Filters": "Filtres",
      "Free Explorer": "Explorateur Gratuit",
      "Story Weaver": "Tisseur d'Histoires",
      "Education Pro": "Éducation Pro",
      "Subscribe Now": "S'abonner Maintenant",
      "Contact Sales": "Contacter les Ventes",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;