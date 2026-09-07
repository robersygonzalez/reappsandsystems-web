import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  es: {
    translation: {
      nav: {
        services: "Servicios",
        stack: "Tecnología",
        projects: "Proyectos",
        contact: "Contacto",
      },
      hero: {
        badge: "Disponible para proyectos",
        title: "Desarrollo de Software",
        titleHighlight: "Full-Stack",
        subtitle:
          "Construimos aplicaciones web y móviles de alto rendimiento con arquitectura limpia y tecnologías modernas.",
        ctaPrimary: "Iniciar Proyecto",
        ctaSecondary: "Ver Proyectos",
      },
      language: {
        label: "Idioma",
        ariaEs: "Cambiar a español",
        ariaEn: "Cambiar a inglés",
      },
    },
  },
  en: {
    translation: {
      nav: {
        services: "Services",
        stack: "Tech Stack",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        badge: "Available for projects",
        title: "Full-Stack Software",
        titleHighlight: "Development",
        subtitle:
          "Building high-performance web and mobile applications with clean architecture and modern tech stacks.",
        ctaPrimary: "Start Project",
        ctaSecondary: "View Projects",
      },
      language: {
        label: "Language",
        ariaEs: "Switch to Spanish",
        ariaEn: "Switch to English",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
