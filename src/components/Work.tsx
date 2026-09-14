"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

const SECONDARY_CASES = ["c2", "c4", "c5", "c6"];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 19L19 5M19 5H9M19 5V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Work() {
  const { t } = useLanguage();

  return (
    <section id="work" className="section-dark">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow eyebrow-pill">{t("work.eyebrow")}</div>
            <h2>
              {t("work.h1")}
              <br />
              {t("work.h2")}
            </h2>
          </div>
          <div className="section-head-side">{t("work.subtitle")}</div>
        </div>

        <Reveal className="work-featured" as="article">
          <div className="work-featured-media">
            <span className="work-featured-tag">{t("work.featured")}</span>
          </div>
          <div className="work-featured-body">
            <div className="work-featured-meta">
              <span>{t("work.c1.cat")}</span>
              <span>{t("work.c1.region")}</span>
            </div>
            <h3>{t("work.c1.title")}</h3>
            <p className="work-featured-desc">{t("work.c1.desc")}</p>
            <div className="work-featured-stats">
              <div className="work-stat">
                <div className="num" dir="ltr">{t("work.c1.stat1Val")}</div>
                <div className="lbl">{t("work.c1.stat1Lbl")}</div>
              </div>
              <div className="work-stat">
                <div className="num" dir="ltr">{t("work.c1.stat2Val")}</div>
                <div className="lbl">{t("work.c1.stat2Lbl")}</div>
              </div>
            </div>
            <div className="work-featured-footer">
              <span>{t("work.c1.title")}</span>
              <a href="#contact" className="work-view-link">
                {t("work.view")}
                <span className="view-arrow">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="work-grid">
          {SECONDARY_CASES.map((c) => (
            <Reveal as="article" className="work-card" key={c}>
              <div className="work-card-meta">
                <span className="cat">{t(`work.${c}.cat`)}</span>
                <span className="region">{t(`work.${c}.region`)}</span>
              </div>
              <h4>{t(`work.${c}.title`)}</h4>
              <p className="work-card-desc">{t(`work.${c}.desc`)}</p>
              <div className="work-highlight-bar">
                <span className="lbl">{t(`work.${c}.hlLabel`)}</span>
                <span className="val" dir="ltr">{t(`work.${c}.hl`)}</span>
              </div>
              <div className="work-card-footer">
                <span>{t(`work.${c}.title`)}</span>
                <span className="view-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
