import { Layout, Server, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Category {
  key: "frontend" | "backend" | "infra";
  icon: LucideIcon;
  techs: string[];
}

const CATEGORIES: Category[] = [
  {
    key: "frontend",
    icon: Layout,
    techs: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Vite",
    ],
  },
  {
    key: "backend",
    icon: Server,
    techs: ["Node.js", "NestJS", "REST APIs", "GraphQL"],
  },
  {
    key: "infra",
    icon: Database,
    techs: ["PostgreSQL", "Docker", "Git", "Vercel"],
  },
];

export function TechStack() {
  const { t } = useTranslation();

  return (
    <section
      id="stack"
      className="relative border-t border-slate-900 bg-slate-950 py-24 px-4"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            {t("stack.badge")}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("stack.title")}
          </h2>
          <p className="mt-4 text-lg text-slate-400">{t("stack.subtitle")}</p>
        </div>

        {/* Categorías */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CATEGORIES.map(({ key, icon: Icon, techs }) => (
            <div
              key={key}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)]"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {t(`stack.categories.${key}`)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="group inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:text-emerald-400"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-125" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
