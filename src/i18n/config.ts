import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation & Common
      "Get Started": "Get Started",
      "Story Library": "Story Library",
      "Pricing": "Pricing",
      "Contact": "Contact",
      "About": "About",
      "Library": "Library",
      "School Pilot": "School Pilot",
      "AI Story Engine": "AI Story Engine",
      "Community": "Community",
      "Resources": "Resources",
      "Blog": "Blog",
      "FAQ": "FAQ",
      "Privacy Policy": "Privacy Policy",
      "Terms": "Terms",

      // Library Page
      "Start Reading": "Start Reading",
      "Search stories": "Search stories",
      "Filters": "Filters",
      "Browse Library": "Browse Library",
      "Age Range": "Age Range",
      "Reading Level": "Reading Level",
      "Genre": "Genre",
      "Description": "Description",

      // Pricing Page
      "Free Explorer": "Free Explorer",
      "Story Weaver": "Story Weaver",
      "Education Pro": "Education Pro",
      "Subscribe Now": "Subscribe Now",
      "Contact Sales": "Contact Sales",
      "Monthly": "Monthly",
      "Yearly": "Yearly",
      "Custom": "Custom",
      "Starting from": "Starting from",

      // Hero Section
      "Interactive Learning Adventures": "Interactive Learning Adventures",
      "Experience AI-powered stories": "Experience AI-powered stories that adapt to your choices",
      "Join thousands of students": "Join thousands of students in their learning journey",
      "Try Demo": "Try Demo",

      // Common Actions
      "Learn More": "Learn More",
      "Continue": "Continue",
      "Back": "Back",
      "Save": "Save",
      "Cancel": "Cancel",
      "Submit": "Submit"
    }
  },
  es: {
    translation: {
      // Navigation & Common
      "Get Started": "Comenzar",
      "Story Library": "Biblioteca de Historias",
      "Pricing": "Precios",
      "Contact": "Contacto",
      "About": "Acerca de",
      "Library": "Biblioteca",
      "School Pilot": "Piloto Escolar",
      "AI Story Engine": "Motor de Historias IA",
      "Community": "Comunidad",
      "Resources": "Recursos",
      "Blog": "Blog",
      "FAQ": "Preguntas Frecuentes",
      "Privacy Policy": "Política de Privacidad",
      "Terms": "Términos",

      // Library Page
      "Start Reading": "Empezar a Leer",
      "Search stories": "Buscar historias",
      "Filters": "Filtros",
      "Browse Library": "Explorar Biblioteca",
      "Age Range": "Rango de Edad",
      "Reading Level": "Nivel de Lectura",
      "Genre": "Género",
      "Description": "Descripción",

      // Pricing Page
      "Free Explorer": "Explorador Gratuito",
      "Story Weaver": "Tejedor de Historias",
      "Education Pro": "Educación Pro",
      "Subscribe Now": "Suscribirse Ahora",
      "Contact Sales": "Contactar Ventas",
      "Monthly": "Mensual",
      "Yearly": "Anual",
      "Custom": "Personalizado",
      "Starting from": "Desde",

      // Hero Section
      "Interactive Learning Adventures": "Aventuras de Aprendizaje Interactivas",
      "Experience AI-powered stories": "Experimenta historias impulsadas por IA que se adaptan a tus elecciones",
      "Join thousands of students": "Únete a miles de estudiantes en su viaje de aprendizaje",
      "Try Demo": "Probar Demo",

      // Common Actions
      "Learn More": "Más Información",
      "Continue": "Continuar",
      "Back": "Atrás",
      "Save": "Guardar",
      "Cancel": "Cancelar",
      "Submit": "Enviar"
    }
  },
  fr: {
    translation: {
      // Navigation & Common
      "Get Started": "Commencer",
      "Story Library": "Bibliothèque d'Histoires",
      "Pricing": "Tarifs",
      "Contact": "Contact",
      "About": "À Propos",
      "Library": "Bibliothèque",
      "School Pilot": "Pilote Scolaire",
      "AI Story Engine": "Moteur d'Histoires IA",
      "Community": "Communauté",
      "Resources": "Ressources",
      "Blog": "Blog",
      "FAQ": "FAQ",
      "Privacy Policy": "Politique de Confidentialité",
      "Terms": "Conditions",

      // Library Page
      "Start Reading": "Commencer la Lecture",
      "Search stories": "Rechercher des histoires",
      "Filters": "Filtres",
      "Browse Library": "Parcourir la Bibliothèque",
      "Age Range": "Tranche d'Âge",
      "Reading Level": "Niveau de Lecture",
      "Genre": "Genre",
      "Description": "Description",

      // Pricing Page
      "Free Explorer": "Explorateur Gratuit",
      "Story Weaver": "Tisseur d'Histoires",
      "Education Pro": "Éducation Pro",
      "Subscribe Now": "S'abonner Maintenant",
      "Contact Sales": "Contacter les Ventes",
      "Monthly": "Mensuel",
      "Yearly": "Annuel",
      "Custom": "Personnalisé",
      "Starting from": "À partir de",

      // Hero Section
      "Interactive Learning Adventures": "Aventures d'Apprentissage Interactives",
      "Experience AI-powered stories": "Découvrez des histoires alimentées par l'IA qui s'adaptent à vos choix",
      "Join thousands of students": "Rejoignez des milliers d'étudiants dans leur parcours d'apprentissage",
      "Try Demo": "Essayer la Démo",

      // Common Actions
      "Learn More": "En Savoir Plus",
      "Continue": "Continuer",
      "Back": "Retour",
      "Save": "Enregistrer",
      "Cancel": "Annuler",
      "Submit": "Envoyer"
    }
  }
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