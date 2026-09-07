import { Code2, Smartphone, Cloud, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ServiceCard {
  key: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tech: string[];
}

export function Services() {
  const { t } = useTranslation();

  const services: ServiceCard[] = [
    {
      key: "webDev",
      icon: Code2,
      title: t("services.webDev.title"),
      description: t("services.webDev.description"),
      tech: ["React", "Vite", "Node.js", "NestJS"],
    },
    {
      key: "mobileDev",
      icon: Smartphone,
      title: t("services.mobileDev.title"),
      description: t("services.mobileDev.description"),
      tech: ["React Native"],
    },
    {
      key: "cloud",
      icon: Cloud,
      title: t("services.cloud.title"),
      description: t("services.cloud.description"),
      tech: ["REST", "GraphQL", "PostgreSQL", "Docker"],
    },
    {
      key: "custom",
      icon: Wrench,
      title: t("services.custom.title"),
      description: t("services.custom.description"),
      tech: [
        t("services.custom.tech.refactor"),
        t("services.custom.tech.performance"),
        t("services.custom.tech.maintenance"),
      ],
    },
  ];

  return (
    <section id="servicios" className="relative bg-slate-950 py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ key, icon: Icon, title, description, tech }) => (
            <div
              key={key}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
              <p className="mb-4 text-sm text-slate-400">{description}</p>
              <ul className="flex flex-wrap gap-2">
                {tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-800/50 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
