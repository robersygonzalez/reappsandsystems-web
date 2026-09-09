import { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo de la empresa */}
          <div className="flex items-center gap-3">
            <img
              src="/logo-icon.png"
              alt=""
              className="h-10 w-auto object-contain"
            />
            <span className="text-lg font-bold tracking-tight text-white">
              ReApps <span className="text-emerald-400">&</span> Systems
            </span>
          </div>

          {/* Menú para Pantallas Grandes (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#perfil"
              className="hover:text-emerald-400 transition-colors"
            >
              {t("nav.about")}
            </a>
            <a
              href="#servicios"
              className="hover:text-emerald-400 transition-colors"
            >
              {t("nav.services")}
            </a>
            <a
              href="#stack"
              className="hover:text-emerald-400 transition-colors"
            >
              {t("nav.stack")}
            </a>
            <a
              href="#proyectos"
              className="hover:text-emerald-400 transition-colors"
            >
              {t("nav.projects")}
            </a>
            <a
              href="#contacto"
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              {t("nav.contact")}
            </a>
            <LanguageToggle />
          </div>

          {/* Botón para Menú Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable en Móvil */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 flex flex-col gap-3 text-slate-300">
          <a
            href="#perfil"
            onClick={() => setIsOpen(false)}
            className="py-2 hover:text-emerald-400"
          >
            {t("nav.about")}
          </a>
          <a
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="py-2 hover:text-emerald-400"
          >
            {t("nav.services")}
          </a>
          <a
            href="#stack"
            onClick={() => setIsOpen(false)}
            className="py-2 hover:text-emerald-400"
          >
            {t("nav.stack")}
          </a>
          <a
            href="#proyectos"
            onClick={() => setIsOpen(false)}
            className="py-2 hover:text-emerald-400"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="bg-emerald-500 text-slate-950 font-semibold py-2 px-4 rounded-lg text-center"
          >
            {t("nav.contact")}
          </a>
          <LanguageToggle />
        </div>
      )}
    </nav>
  );
}
