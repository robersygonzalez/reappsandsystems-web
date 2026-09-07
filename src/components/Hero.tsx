import { ArrowRight, FolderGit2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-950 pt-40 pb-24 px-4"
    >
      {/* Cuadrícula tecnológica de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />

      {/* Resplandor esmeralda */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-24 h-72 w-72 sm:h-96 sm:w-96 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[100px]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge de disponibilidad */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t("hero.badge")}
        </div>

        {/* Título con gradiente esmeralda */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          {t("hero.title")}{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
            {t("hero.titleHighlight")}
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          {t("hero.subtitle")}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-600"
          >
            {t("hero.ctaPrimary")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-emerald-500 hover:text-emerald-400"
          >
            <FolderGit2 className="h-4 w-4" />
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
