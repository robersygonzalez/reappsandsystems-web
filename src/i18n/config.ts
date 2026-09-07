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
      services: {
        badge: "Nuestros Servicios",
        title: "Qué Hacemos",
        subtitle:
          "Soluciones de software a la medida, desde la arquitectura hasta el despliegue.",
        webDev: {
          title: "Desarrollo Web Full-Stack",
          description:
            "Aplicaciones web robustas y escalables, desde el frontend hasta la API.",
        },
        mobileDev: {
          title: "Desarrollo Móvil",
          description:
            "Apps nativas multiplataforma a partir de una sola base de código.",
        },
        cloud: {
          title: "Arquitectura & Cloud",
          description:
            "Infraestructura y APIs diseñadas para escalar sin fricción.",
        },
        custom: {
          title: "Sistemas a Medida & Optimización",
          description:
            "Refactorización y mejoras de rendimiento para sistemas existentes.",
          tech: {
            refactor: "Refactorización",
            performance: "Performance",
            maintenance: "Mantenimiento",
          },
        },
      },
      stack: {
        badge: "Ecosistema",
        title: "Nuestro Stack Tecnológico",
        subtitle:
          "Herramientas modernas y probadas en producción, elegidas por rendimiento y escalabilidad.",
        categories: {
          frontend: "Frontend",
          backend: "Backend & API",
          infra: "Database & Infrastructure",
        },
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
      services: {
        badge: "Our Services",
        title: "What We Do",
        subtitle:
          "Tailored software solutions, from architecture to deployment.",
        webDev: {
          title: "Full-Stack Web Development",
          description:
            "Robust, scalable web applications, from the frontend to the API.",
        },
        mobileDev: {
          title: "Mobile Development",
          description: "Cross-platform native apps from a single codebase.",
        },
        cloud: {
          title: "Architecture & Cloud",
          description:
            "Infrastructure and APIs designed to scale without friction.",
        },
        custom: {
          title: "Custom Systems & Optimization",
          description:
            "Refactoring and performance improvements for existing systems.",
          tech: {
            refactor: "Refactoring",
            performance: "Performance",
            maintenance: "Maintenance",
          },
        },
      },
      stack: {
        badge: "Tech Stack",
        title: "Our Tech Stack",
        subtitle:
          "Modern, production-proven tools chosen for performance and scalability.",
        categories: {
          frontend: "Frontend",
          backend: "Backend & API",
          infra: "Database & Infrastructure",
        },
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
