"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";

const NAV_ITEMS: { href: string; key: string }[] = [
  { href: "#work", key: "nav.work" },
  { href: "#capabilities", key: "nav.capabilities" },
  { href: "#about", key: "nav.about" },
  { href: "#partners", key: "nav.partners" },
  { href: "#contact", key: "nav.contact" },
];

export default function Header() {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
        <div className="wrap">
          <nav>
            <a href="#top" className="logo">
              <span className="dot" />
              <span>{t("brand")}</span>
            </a>
            <div className="nav-links">
              {NAV_ITEMS.map((item) => (
                <a key={item.key} href={item.href}>
                  {t(item.key)}
                </a>
              ))}
            </div>
            <div className="nav-right">
              <button className="lang-toggle" type="button" onClick={toggle}>
                {lang === "ar" ? "EN / عربي" : "عربي / EN"}
              </button>
              <a href="#contact" className="btn btn-primary nav-cta">
                {t("nav.cta")}
              </a>
              <button
                className="menu-toggle"
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobileNav"
                onClick={() => setMenuOpen(true)}
              >
                {t("nav.menu")}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`mobile-overlay${menuOpen ? " open" : ""}`}
        id="mobileNav"
      >
        <button
          className="mobile-close"
          type="button"
          onClick={() => setMenuOpen(false)}
        >
          {t("nav.close")}
        </button>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.key}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {t(item.key)}
          </a>
        ))}
      </div>
    </>
  );
}
