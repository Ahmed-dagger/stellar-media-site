"use client";

import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero section-dark">
      <span className="hero-ring-2" aria-hidden="true" />
      <div className="hero-inner">
        <div className="eyebrow eyebrow-pill reveal in" style={{ marginBottom: 28 }}>
          {t("hero.eyebrow")}
        </div>
        <h1 className="hero-title reveal in">
          <span>{t("hero.line1")}</span>
          <br />
          <span className="accent">{t("hero.line2")}</span>
        </h1>
        <p className="hero-ar reveal in" dir="rtl">
          فَلا تَقْنَعْ بِمَا دُونَ النُّجُومِ
        </p>
        <p className="hero-sub reveal in">{t("hero.sub")}</p>
        <div className="hero-ctas reveal in">
          <a href="#work" className="btn btn-primary">
            {t("hero.cta1")}
          </a>
          <a href="#contact" className="btn">
            {t("hero.cta2")}
          </a>
        </div>
      </div>
      <div className="hero-bottom-bar">
        <span>{t("hero.bottomLeft")}</span>
        <span className="scroll-indicator">
          <span>{t("hero.scroll")}</span>
          <span className="scroll-line" aria-hidden="true" />
        </span>
        <span className="hero-bottom-side">{t("hero.bottomRight")}</span>
      </div>
    </section>
  );
}
