import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ContactInfo {
  key: string;
  icon: LucideIcon;
  label: string;
  value: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormData = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
    "idle",
  );

  const contactInfo: ContactInfo[] = [
    {
      key: "email",
      icon: Mail,
      label: t("contact.info.email.label"),
      value: t("contact.info.email.value"),
    },
    {
      key: "location",
      icon: MapPin,
      label: t("contact.info.location.label"),
      value: t("contact.info.location.value"),
    },
    {
      key: "hours",
      icon: Clock,
      label: t("contact.info.hours.label"),
      value: t("contact.info.hours.value"),
    },
  ];

  const handleChange = (
    field: keyof FormData,
    value: string,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("submitted");
      setFormData(EMPTY_FORM);
    }, 600);
  };

  return (
    <section
      id="contacto"
      className="relative border-t border-slate-900 bg-slate-950 py-24 px-4"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Columna Izquierda: Información */}
        <div>
          <span className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            {t("contact.badge")}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 max-w-md text-lg text-slate-400">
            {t("contact.subtitle")}
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {contactInfo.map(({ key, icon: Icon, label, value }) => (
              <div
                key={key}
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-colors duration-300 hover:border-emerald-500/50"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
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

        {/* Columna Derecha: Formulario */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                {t("contact.form.name")}
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={t("contact.form.namePlaceholder")}
                className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors duration-300 focus:border-emerald-500"
              />
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                {t("contact.form.email")}
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder={t("contact.form.emailPlaceholder")}
                className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors duration-300 focus:border-emerald-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                {t("contact.form.subject")}
              </label>
              <input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                placeholder={t("contact.form.subjectPlaceholder")}
                className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors duration-300 focus:border-emerald-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder={t("contact.form.messagePlaceholder")}
                className="w-full resize-none rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors duration-300 focus:border-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition-colors duration-300 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === "submitting"
              ? t("contact.form.submitting")
              : t("contact.form.submit")}
          </button>

          {status === "submitted" && (
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              {t("contact.form.success")}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
