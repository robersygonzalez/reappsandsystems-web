import { Gauge, Globe, ShoppingCart, Boxes, ExternalLink, FolderGit2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Project {
  key: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  demoHref: string;
  codeHref: string;
}

export function Projects() {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      key: "oilflow",
      icon: Gauge,
      title: t("projects.oilflow.title"),
      description: t("projects.oilflow.description"),
      tags: ["React", "TypeScript", "Tailwind CSS v4", "Zustand", "Recharts", "Lucide"],
      demoHref: "https://oilflow360.vercel.app/",
      codeHref: "https://github.com/robersygonzalez/oilflow360",
    },
    {
      key: "novacraft",
      icon: Boxes,
      title: t("projects.novacraft.title"),
      description: t("projects.novacraft.description"),
      tags: ["React", "TypeScript", "Zustand", "Tailwind CSS v4", "Recharts", "Lucide React"],
      demoHref: "https://novacraft-erp.vercel.app",
      codeHref: "https://github.com/robersygonzalez/novacraft-erp",
    },
    {
      key: "portfolio",
      icon: Globe,
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      tags: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      demoHref: "https://www.reappsandsystems.com/",
      codeHref: "https://github.com/robersygonzalez/reappsandsystems-web",
    },
    {
      key: "ecommerce",
      icon: ShoppingCart,
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.description"),
      tags: ["React", "NestJS", "PostgreSQL", "Docker"],
      demoHref: "#",
      codeHref: "#",
    },
  ];

  return (
    <section
      id="proyectos"
      className="relative border-t border-slate-900 bg-slate-950 py-24 px-4"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            {t("projects.badge")}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("projects.title")}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({ key, icon: Icon, title, description, tags, demoHref, codeHref }) => (
              <div
                key={key}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)]"
              >
                {/* Ventana estilo navegador */}
                <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>

                {/* Preview */}
                <div
                  className="relative flex aspect-video items-center justify-center overflow-hidden"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                >
                  <div className="absolute h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl transition-all duration-300 group-hover:bg-emerald-500/20" />
                  <Icon className="relative h-12 w-12 text-emerald-400/80 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-400">{description}</p>

                  <ul className="mb-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-slate-700 bg-slate-800/50 px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center gap-5 border-t border-slate-800 pt-4 text-sm font-medium">
                    <a
                      href={demoHref}
                      {...(demoHref.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-emerald-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("projects.demoLabel")}
                    </a>
                    <a
                      href={codeHref}
                      {...(codeHref.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-emerald-400"
                    >
                      <FolderGit2 className="h-4 w-4" />
                      {t("projects.codeLabel")}
                    </a>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
