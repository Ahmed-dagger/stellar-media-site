"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

export default function Agency() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-light">
      <div className="wrap">
        <div className="agency-grid">
          <Reveal>
            <div className="eyebrow">{t("agency.eyebrow")}</div>
            <h2>
              {t("agency.h1")}
              <br />
              <span className="tint">{t("agency.h2")}</span>
            </h2>
            <p>{t("agency.p1")}</p>
            <p>{t("agency.p2")}</p>
            <div className="agency-info-row">
              <div className="agency-info-cell">
                <div className="k">{t("agency.info1.k")}</div>
                <div className="v">{t("agency.info1.v")}</div>
              </div>
              <div className="agency-info-cell">
                <div className="k">{t("agency.info2.k")}</div>
                <div className="v">{t("agency.info2.v")}</div>
              </div>
              <div className="agency-info-cell">
                <div className="k">{t("agency.info3.k")}</div>
                <div className="v">{t("agency.info3.v")}</div>
              </div>
            </div>
            <div className="agency-note">
              <span className="badge" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <p>{t("agency.note")}</p>
            </div>
          </Reveal>
          <Reveal className="agency-visual" as="div">
            <div className="agency-visual-label">
              <span>{t("agency.frameLeft")}</span>
              <span>{t("agency.frameRight")}</span>
            </div>
            <div className="agency-quote-card">
              <div className="k">{t("agency.quoteK")}</div>
              <p>{t("agency.quoteText")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
