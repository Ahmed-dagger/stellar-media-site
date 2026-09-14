"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

const TEAM = [
  { name: "Abderlahman", roleKey: "team.r1" },
  { name: "Alex Debare", roleKey: "team.r2" },
  { name: "Asem Mohamed", roleKey: "team.r3" },
  { name: "Jumana Yousif", roleKey: "team.r4" },
  { name: "Nourhan Medhat", roleKey: "team.r5" },
  { name: "Randa Khaled", roleKey: "team.r6" },
  { name: "Abin James", roleKey: "team.r7" },
  { name: "Kinraw Sant", roleKey: "team.r8" },
  { name: "Katyani Vats", roleKey: "team.r9" },
];

export default function Team() {
  const { t } = useLanguage();

  return (
    <section className="section-light">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-text">
            <div className="eyebrow">{t("team.eyebrow")}</div>
            <h2>
              {t("team.h1")}
              <br />
              <span className="tint">{t("team.h2")}</span>
            </h2>
          </div>
          <div className="section-head-side">{t("team.subtitle")}</div>
        </div>
        <div className="team-grid">
          {TEAM.map((member) => (
            <Reveal className="member" key={member.name}>
              <h4>{member.name}</h4>
              <div className="role">{t(member.roleKey)}</div>
              <div className="loc">{t("team.loc")}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
