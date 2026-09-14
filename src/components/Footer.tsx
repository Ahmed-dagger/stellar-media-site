"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="dot" /> STELLAR MEDIA
            </div>
            <p>{t("footer.tag")}</p>
            <p style={{ marginTop: 6 }}>{t("footer.loc")}</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h5>{t("footer.nav")}</h5>
              <a href="#work">{t("nav.work")}</a>
              <a href="#capabilities">{t("nav.capabilities")}</a>
              <a href="#about">{t("nav.about")}</a>
              <a href="#contact">{t("nav.contact")}</a>
            </div>
            <div className="footer-col">
              <h5>{t("footer.social")}</h5>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="footer-col">
              <h5>{t("footer.legal")}</h5>
              <a href="#">{t("footer.privacy")}</a>
              <a href="#">{t("footer.terms")}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t("footer.copy")}</span>
          <span className="footer-ar">فَلا تَقْنَعْ بِمَا دُونَ النُّجُومِ</span>
        </div>
      </div>
    </footer>
  );
}
