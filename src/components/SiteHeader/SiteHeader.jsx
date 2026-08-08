import { ButtonMenu } from "../ButtonMenu/ButtonMenu";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { navigationItems } from "../../data/homeContent";
import { useLanguage } from "../../i18n/LanguageContext";
import "./SiteHeader.css";

export function SiteHeader() {
  const { t, localizePath } = useLanguage();

  return (
    <header className="site-header">
      <ButtonMenu />

      <a
        className="site-header__brand"
        href={localizePath("/")}
        aria-label="Old Shakespeare home"
      >
        <img src="/images/old-shakespeare-logo.png" alt="" />
      </a>

      <nav className="site-header__desktop-nav" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <a href={localizePath(item.href)} key={item.href}>
            {t(item.translationKey)}
          </a>
        ))}
      </nav>

      <LanguageSwitcher />

      <a className="booking-button" href={localizePath("/reservation")}>
        <span className="booking-button__full">{t("header.bookTable")}</span>
        {/* <span className="booking-button__short">{t("header.bookTableShort")}</span> */}
      </a>
    </header>
  );
}
