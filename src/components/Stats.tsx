"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";
import Counter from "./Counter";

const STATS = [
  { target: 1, decimals: false, suffix: "B+", tagKey: "stats.tag1", labelKey: "stats.l1" },
  { target: 8, decimals: false, suffix: "+", tagKey: "stats.tag2", labelKey: "stats.l2" },
  { target: 22, decimals: false, suffix: "", tagKey: "stats.tag3", labelKey: "stats.l3" },
  { target: 14.3, decimals: true, suffix: "K", tagKey: "stats.tag4", labelKey: "stats.l4" },
  { target: 44.1, decimals: true, suffix: "M", tagKey: "stats.tag5", labelKey: "stats.l5" },
  { target: 9, decimals: false, suffix: "M+", tagKey: "stats.tag6", labelKey: "stats.l6" },
];

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="section-dark">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow eyebrow-pill">{t("stats.eyebrow")}</div>
            <h2>
              {t("stats.h1")}
              <br />
              {t("stats.h2")}
            </h2>
          </div>
          <div className="section-head-side">{t("stats.source")}</div>
        </div>
        <div className="stats-grid">
          {STATS.map((stat) => (
            <Reveal className="stat" key={stat.labelKey}>
              <div className="stat-tag">{t(stat.tagKey)}</div>
              <div className="stat-num" dir="ltr">
                <Counter target={stat.target} decimals={stat.decimals} />
                {stat.suffix}
              </div>
              <div className="stat-label">{t(stat.labelKey)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
