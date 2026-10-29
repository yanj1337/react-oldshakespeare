import { HeroContent } from '../../components/HeroContent/HeroContent'
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";
import { SiteHeader } from "../../components/SiteHeader/SiteHeader";
import { homeCards } from "../../data/homeContent";
import { HeroLocation } from "../../components/HeroLocation/HeroLocation";
import "./HomePage.css";

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

          <HeroContent>
            <HeroLocation />
            <h1 id="home-title">
              <span>Old</span>
              <span>Shakespeare</span>
            </h1>
            <p className="hero-panel__subtitle">Pub &amp; Restaurant</p>
          </HeroContent>
        </section>

        <aside className="home-cards" aria-label="Explore Old Shakespeare">
          {homeCards.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </aside>
      </div>
    </main>
  );
}
