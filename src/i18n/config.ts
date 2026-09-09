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
      projects: {
        badge: "Portafolio",
        title: "Proyectos Destacados",
        subtitle:
          "Una muestra de los sistemas que hemos diseñado y construido de principio a fin.",
        demoLabel: "Demo En Vivo",
        codeLabel: "Código Fuente",
        oilflow: {
          title: "OilFlow 360 – Industrial Telemetry & Asset Dashboard",
          description:
            "Plataforma SaaS de monitoreo industrial y telemetría en tiempo real para activos petroleros. Incluye simulador de eventos en vivo, gestión de estados con Zustand, filtros avanzados y soporte i18n (ES/EN).",
        },
        novacraft: {
          title: "NovaCraft ERP & Store",
          description:
            "Plataforma SaaS Full-Stack (Demo de estado global) que sincroniza en tiempo real una tienda E-Commerce con un panel de control ERP/Inventario y métricas KPI.",
        },
        portfolio: {
          title: "ReApps & Systems Web",
          description:
            "Portafolio corporativo de alto rendimiento, con soporte multi-idioma y diseño a medida.",
        },
      },
      contact: {
        badge: "Contacto",
        title: "¿Tienes un proyecto en mente?",
        subtitle:
          "Cuéntanos qué necesitas y te responderemos con una propuesta clara, sin vueltas.",
        info: {
          email: { label: "Correo Electrónico", value: "hello@reapps.dev" },
          location: { label: "Ubicación", value: "Remoto · LatAm" },
          hours: {
            label: "Horario de Respuesta",
            value: "Lun - Vie, 9am - 6pm",
          },
        },
        form: {
          name: "Nombre",
          namePlaceholder: "Tu nombre",
          email: "Email",
          emailPlaceholder: "tu@email.com",
          subject: "Asunto",
          subjectPlaceholder: "¿En qué podemos ayudarte?",
          message: "Mensaje",
          messagePlaceholder: "Cuéntanos sobre tu proyecto...",
          submit: "Enviar Mensaje",
          submitting: "Enviando...",
          success: "¡Mensaje enviado! Te contactaremos pronto.",
          error: "No se pudo enviar el mensaje. Intenta de nuevo más tarde.",
        },
      },
      footer: {
        rights: "Todos los derechos reservados.",
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
      projects: {
        badge: "Projects",
        title: "Featured Projects",
        subtitle:
          "A sample of the systems we've designed and built from the ground up.",
        demoLabel: "Live Demo",
        codeLabel: "Source Code",
        oilflow: {
          title: "OilFlow 360 – Industrial Telemetry & Asset Dashboard",
          description:
            "Industrial SaaS platform for real-time monitoring and telemetry of oilfield assets. Includes a live event simulator, state management with Zustand, advanced filters, and i18n support (ES/EN).",
        },
        novacraft: {
          title: "NovaCraft ERP & Store",
          description:
            "Full-stack SaaS platform (global state demo) that syncs an E-Commerce store in real time with an ERP/Inventory dashboard and KPI metrics.",
        },
        portfolio: {
          title: "ReApps & Systems Web",
          description:
            "High-performance corporate portfolio with multi-language support and custom design.",
        },
      },
      contact: {
        badge: "Contact",
        title: "Have a project in mind?",
        subtitle:
          "Tell us what you need and we'll get back to you with a clear proposal, no runaround.",
        info: {
          email: { label: "Email", value: "hello@reapps.dev" },
          location: { label: "Location", value: "Remote · LatAm" },
          hours: {
            label: "Response Time",
            value: "Mon - Fri, 9am - 6pm",
          },
        },
        form: {
          name: "Name",
          namePlaceholder: "Your name",
          email: "Email",
          emailPlaceholder: "you@email.com",
          subject: "Subject",
          subjectPlaceholder: "How can we help?",
          message: "Message",
          messagePlaceholder: "Tell us about your project...",
          submit: "Send Message",
          submitting: "Sending...",
          success: "Message sent! We'll be in touch soon.",
          error: "Couldn't send the message. Please try again later.",
        },
      },
      footer: {
        rights: "All rights reserved.",
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
