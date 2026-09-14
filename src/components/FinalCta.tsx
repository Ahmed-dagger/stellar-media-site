"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

export default function FinalCta() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="final-section">
      <div className="wrap">
        <div className="final-cta">
          <Reveal className="eyebrow eyebrow-pill final-eyebrow">
            {t("final.eyebrow")}
          </Reveal>
          <Reveal as="h2">{t("final.h1")}</Reveal>
          <Reveal as="h2">
            <span className="tint">{t("final.h2")}</span>
          </Reveal>
          <Reveal as="p" className="final-ar" dir="rtl" role="text">
            فَلا تَقْنَعْ بِمَا دُونَ النُّجُومِ
          </Reveal>
          <Reveal as="p" className="final-sub">
            {t("final.sub")}
          </Reveal>
          <Reveal className="final-ctas">
            <a href="mailto:info@stellarmedia.ae" className="btn btn-primary">
              {t("final.cta1")}
            </a>
            <a href="tel:+971559888290" className="btn" dir="ltr">
              +971 55 988 8290
            </a>
          </Reveal>
          <Reveal className="final-contact-bar">
            <div className="final-contact-cell">
              <div className="k">{t("final.contactEmailK")}</div>
              <a className="v" dir="ltr" href="mailto:info@stellarmedia.ae">
                info@stellarmedia.ae
              </a>
            </div>
            <div className="final-contact-cell">
              <div className="k">{t("final.contactPhoneK")}</div>
              <a className="v" dir="ltr" href="tel:+971559888290">
                055 988 8290
              </a>
            </div>
            <div className="final-contact-cell">
              <div className="k">{t("final.contactWebK")}</div>
              <span className="v" dir="ltr">stellarmedia.ae</span>
            </div>
            <div className="final-contact-cell">
              <div className="k">{t("final.contactStudioK")}</div>
              <span className="v">{t("final.contactStudioV")}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
