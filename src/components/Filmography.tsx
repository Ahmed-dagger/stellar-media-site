"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

const GRID_FILMS = ["f1", "f2", "f3", "f4", "f5", "f6"];
const MORE_FILMS = ["f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14"];

export default function Filmography() {
  const { t } = useLanguage();

  return (
    <section className="section-light">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow">{t("film.eyebrow")}</div>
            <h2>
              {t("film.h1")}
              <br />
              <span className="tint">{t("film.h2")}</span>
            </h2>
          </div>
          <div className="section-head-side">
            {t("film.subtitle")}
            <br />
            <strong>{t("film.count")}</strong>
          </div>
        </div>

        <div className="film-grid">
          {GRID_FILMS.map((key, i) => (
            <Reveal className="film-card" key={key}>
              <div className="film-card-meta">
                <span className="film-card-num">FILM_{String(i + 1).padStart(2, "0")}</span>
                <span className="film-card-tag">{t(`film.${key}.cat`)}</span>
              </div>
              <h4>{t(`film.${key}`)}</h4>
              <p>{t(`film.${key}.desc`)}</p>
              <div className="film-card-footer">
                <span>{t("film.eyebrow")}</span>
                <span className="link">{t("film.watch")}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="film-more" as="p">
          <strong>{t("film.moreLabel")}</strong>{" "}
          {MORE_FILMS.map((key) => t(`film.${key}`)).join(" · ")}
        </Reveal>
      </div>
    </section>
  );
}
