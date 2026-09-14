"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

const ICONS: Record<string, React.ReactNode> = {
  i1: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12.5L10 17.5L19 6.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  i2: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10L21 7V17L16 14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  i3: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" fill="currentColor" />
    </svg>
  ),
};

const DISCIPLINES = [
  {
    index: "01",
    icon: "i1",
    titleKey: "services.d1.title",
    descKey: "services.d1.desc",
    footKey: "services.d1.footMeta",
    items: ["services.d1.i1", "services.d1.i2", "services.d1.i3", "services.d1.i4", "services.d1.i5"],
  },
  {
    index: "02",
    icon: "i2",
    titleKey: "services.d2.title",
    descKey: "services.d2.desc",
    footKey: "services.d2.footMeta",
    items: ["services.d2.i1", "services.d2.i2", "services.d2.i3", "services.d2.i4", "services.d2.i5"],
  },
  {
    index: "03",
    icon: "i3",
    titleKey: "services.d3.title",
    descKey: "services.d3.desc",
    footKey: "services.d3.footMeta",
    items: ["services.d3.i1", "services.d3.i2", "services.d3.i3", "services.d3.i4", "services.d3.i5"],
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="section-light">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow">{t("services.eyebrow")}</div>
            <h2>
              {t("services.h1")}
              <br />
              <span className="tint">{t("services.h2")}</span>
            </h2>
          </div>
          <div className="section-head-side">{t("services.subtitle")}</div>
        </div>
        <div className="disc-grid">
          {DISCIPLINES.map((disc) => (
            <Reveal className="disc" key={disc.index}>
              <div className="disc-top">
                <div className="disc-index">{disc.index}</div>
                <span className={`disc-icon ${disc.icon}`} aria-hidden="true">
                  {ICONS[disc.icon]}
                </span>
              </div>
              <h3>{t(disc.titleKey)}</h3>
              <p className="disc-desc">{t(disc.descKey)}</p>
              <ul>
                {disc.items.map((itemKey) => (
                  <li key={itemKey}>{t(itemKey)}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
