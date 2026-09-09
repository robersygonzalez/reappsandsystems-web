import {
  Phone,
  Mail,
  MapPin,
  Building2,
  Hash,
  Landmark,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  const contactItems = [
    {
      key: "phone",
      icon: Phone,
      label: t("about.profile.phoneLabel"),
      value: t("about.profile.phoneValue"),
    },
    {
      key: "email",
      icon: Mail,
      label: t("about.profile.emailLabel"),
      value: t("about.profile.emailValue"),
    },
    {
      key: "location",
      icon: MapPin,
      label: t("about.profile.locationLabel"),
      value: t("about.profile.locationValue"),
    },
  ];

  const achievements = t("about.credentials.achievements", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      id="perfil"
      className="relative border-t border-slate-900 bg-slate-950 py-24 px-4"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            {t("about.badge")}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("about.title")}
          </h2>
          <p className="mt-4 text-lg text-slate-400">{t("about.subtitle")}</p>
        </div>

        {/* Tarjeta de perfil del fundador */}
        <div className="mb-6 flex flex-col items-center gap-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 md:flex-row">
          <img
            src="/robersy-profile.png"
            alt={t("about.profile.name")}
            className="h-36 w-36 shrink-0 rounded-2xl border-2 border-emerald-500/30 object-cover sm:h-44 sm:w-44"
          />
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {t("about.profile.name")}
            </h3>
            <p className="mt-2 max-w-xl text-sm font-medium text-emerald-400">
              {t("about.profile.role")}
            </p>

            <div className="mt-6 flex flex-col flex-wrap gap-4 sm:flex-row">
              {contactItems.map(({ key, icon: Icon, label, value }) => (
                <div key={key} className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-slate-200">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Empresa y credenciales */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Tarjeta corporativa */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)] sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <span className="mb-1 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  {t("about.company.badge")}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {t("about.company.title")}
                </h3>
              </div>
            </div>

            <dl className="flex flex-col gap-3 border-t border-slate-800 pt-5">
              <div className="flex items-start gap-3">
                <Hash className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {t("about.company.registrationLabel")}
                  </dt>
                  <dd className="text-sm font-medium text-slate-200">
                    {t("about.company.registrationValue")}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {t("about.company.einLabel")}
                  </dt>
                  <dd className="text-sm font-medium text-slate-200">
                    {t("about.company.einValue")}
                  </dd>
                </div>
              </div>
            </dl>

            <p className="mt-5 border-t border-slate-800 pt-5 text-sm text-slate-400">
              <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">
                {t("about.company.servicesLabel")}
              </span>
              {t("about.company.servicesValue")}
            </p>
          </div>

          {/* Tarjeta de credenciales */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)] sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="mb-1 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  {t("about.credentials.badge")}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {t("about.credentials.title")}
                </h3>
              </div>
            </div>

            <dl className="flex flex-col gap-3 border-t border-slate-800 pt-5">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {t("about.credentials.educationLabel")}
                  </dt>
                  <dd className="text-sm font-medium text-slate-200">
                    {t("about.credentials.educationValue")}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {t("about.credentials.experienceLabel")}
                  </dt>
                  <dd className="text-sm font-medium text-slate-200">
                    {t("about.credentials.experienceValue")}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-5 border-t border-slate-800 pt-5">
              <span className="mb-3 block text-xs font-medium uppercase tracking-wide text-slate-500">
                {t("about.credentials.achievementsLabel")}
              </span>
              <ul className="flex flex-col gap-2.5">
                {achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-2.5 text-sm text-slate-400"
                  >
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
