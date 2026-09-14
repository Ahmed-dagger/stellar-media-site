"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  { key: "1", name: "Nour Kazem" },
  { key: "2", name: "Noura Al Tamimi" },
  { key: "3", name: "Khawla Tarish" },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section-light">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow">{t("testi.eyebrow")}</div>
            <h2>
              {t("testi.h1")}
              <br />
              <span className="tint">{t("testi.h2")}</span>
            </h2>
          </div>
          <div className="section-head-side">{t("testi.subtitle")}</div>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((testi) => (
            <Reveal as="div" className="testi" key={testi.key}>
              <blockquote>{t(`testi.q${testi.key}`)}</blockquote>
              <footer>
                <span className="name">{testi.name}</span>
                <span>{t(`testi.r${testi.key}`)}</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
