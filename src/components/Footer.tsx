import { useTranslation } from "react-i18next";

const QUICK_LINKS = [
  { href: "#perfil", key: "about" },
  { href: "#servicios", key: "services" },
  { href: "#stack", key: "stack" },
  { href: "#proyectos", key: "projects" },
  { href: "#contacto", key: "contact" },
] as const;

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 px-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between">
        {/* Isotipo + nombre */}
        <div className="flex items-center gap-3">
          <img
            src="/logo-icon.png"
            alt=""
            className="h-8 w-auto object-contain"
          />
          <span className="text-base font-bold tracking-tight text-white">
            ReApps <span className="text-emerald-400">&</span> Systems
          </span>
        </div>

        {/* Enlaces rápidos */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-400">
          {QUICK_LINKS.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="transition-colors hover:text-emerald-400"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {year} ReApps &amp; Systems. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
