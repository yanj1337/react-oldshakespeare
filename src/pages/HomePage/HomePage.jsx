import { FeatureCard } from '../../components/FeatureCard/FeatureCard'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import { homeCards } from '../../data/homeContent'
import './HomePage.css'

export function HomePage() {
  return (
    <main className="home-page" id="top">
      <div className="home-layout">
        <section className="hero-panel" aria-labelledby="home-title">
          <img
            className="hero-panel__image"
            src="/images/home/hero-interior.jpg"
            alt="Dining room at Old Shakespeare Pub & Restaurant"
          />

          <SiteHeader />

          <div className="hero-panel__content">
            <p className="hero-panel__location">Esentepe · Northern Cyprus</p>
            <h1 id="home-title">
              <span>Old</span>
              <span>Shakespeare</span>
            </h1>
            <p className="hero-panel__subtitle">Pub &amp; Restaurant</p>
          </div>
        </section>

        <aside className="home-cards" aria-label="Explore Old Shakespeare">
          {homeCards.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </aside>
      </div>
    </main>
  )
}
