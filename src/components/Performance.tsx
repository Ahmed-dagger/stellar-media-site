"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

const NODES = ["n1", "n2", "n3", "n4"];

export default function Performance() {
  const { t } = useLanguage();

  return (
    <section className="section-dark">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow eyebrow-pill">{t("perf.eyebrow")}</div>
            <h2>
              {t("perf.h1")}
              <br />
              {t("perf.h2")}
            </h2>
          </div>
          <div className="section-head-side">{t("perf.subtitle")}</div>
        </div>
        <Reveal className="perf-flow">
          {NODES.map((n, i) => (
            <div className="perf-node" key={n}>
              <span className="pulse-dot" />
              <div className="n">
                {`${String(i + 1).padStart(2, "0")} // ${t(`perf.${n}.t`).toUpperCase()}`}
              </div>
              <h4>
                {t(`perf.${n}.t`)}
                <span className="sub">{t(`perf.${n}.sub`)}</span>
              </h4>
              <p>{t(`perf.${n}.p`)}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
