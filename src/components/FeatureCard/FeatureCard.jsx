import { useLanguage } from "../../i18n/LanguageContext";
import "./FeatureCard.css";

export function FeatureCard({ id, translationKey, href, image, alt }) {
  const { t, localizePath } = useLanguage();

  return (
    <article className="feature-card" id={id}>
      <img
        className="feature-card__image"
        src={image}
        alt={alt}
        loading="lazy"
      />

      <a className="feature-card__link" href={localizePath(href)}>
        <span>{t(translationKey)}</span>
        <span className="feature-card__arrow" aria-hidden="true">
          →
        </span>
      </a>
    </article>
  );
}
