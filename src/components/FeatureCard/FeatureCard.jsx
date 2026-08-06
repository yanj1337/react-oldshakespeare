import './FeatureCard.css'

export function FeatureCard({ id, title, href, image, alt }) {
  return (
    <article className="feature-card" id={id}>
      <img className="feature-card__image" src={image} alt={alt} loading="lazy" />

      <a className="feature-card__link" href={href}>
        <span>{title}</span>
        <span className="feature-card__arrow" aria-hidden="true">
          →
        </span>
      </a>
    </article>
  )
}
