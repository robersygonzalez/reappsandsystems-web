import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
] as const;

export function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const current = i18n.language.startsWith("en") ? "en" : "es";

  return (
    <div
      role="group"
      aria-label={t("language.label")}
      className="relative inline-flex items-center rounded-full border border-slate-800 bg-slate-900/80 p-1 text-sm font-semibold"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-1 left-1 w-9 rounded-full bg-emerald-500 transition-transform duration-300 ease-out ${
          current === "en" ? "translate-x-9" : "translate-x-0"
        }`}
      />
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={current === code}
          aria-label={
            code === "es" ? t("language.ariaEs") : t("language.ariaEn")
          }
          className={`relative z-10 w-9 rounded-full py-1.5 text-center transition-colors duration-300 ${
            current === code
              ? "text-slate-950"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
