"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

const CLIENTS = [
  "VOYAH",
  "Abu Dhabi Investment Office",
  "Abu Dhabi Department of Economic Development",
  "UAE National Media Office",
  "Zayed Higher Organization",
  "Abu Dhabi Health Services",
  "UAE Boxing Federation",
  "Khalifa University",
  "House of Artisans",
  "Cultural Foundation",
  "Ministry of Health & Prevention",
  "Emirates Drug Establishment",
  "Success Resources",
  "Tony Robbins UPW",
  "National Achievers Congress",
  "Qasr Al Hosn",
];

export default function Clients() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="section-light">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow">{t("clients.eyebrow")}</div>
            <h2>
              {t("clients.h1")}
              <br />
              <span className="tint">{t("clients.h2")}</span>
            </h2>
          </div>
          <div className="section-head-side">{t("clients.subtitle")}</div>
        </div>
        <Reveal className="client-field">
          {CLIENTS.map((name) => (
            <span className="client-star" key={name}>
              {name}
            </span>
          ))}
        </Reveal>
        <Reveal className="client-note" as="p">
          {t("clients.note")}
        </Reveal>
      </div>
    </section>
  );
}
