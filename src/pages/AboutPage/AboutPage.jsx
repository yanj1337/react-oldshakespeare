import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import './AboutPage.css'

export function AboutPage() {
  return (
    <main className="about-page" id="top">
      <div className="about-layout">
        <section className="about-hero" aria-labelledby="about-title">
          <img
            className="about-hero__image"
            src="/images/about/dining-room.jpg"
            alt="The dining room at Old Shakespeare Pub & Restaurant"
          />

          <SiteHeader />

          <div className="about-hero__content">
            <p>Pub &amp; Restaurant · Esentepe</p>
            <h1 id="about-title">
              <span>Our</span>
              <span>story</span>
            </h1>
          </div>
        </section>

        <aside className="about-side" aria-label="About Old Shakespeare">
          <article className="about-story">
            <img
              className="about-story__image"
              src="/images/about/antiques.jpg"
              alt="Antiques in the Old Shakespeare dining room"
            />
            <div className="about-story__content">
              <p className="about-story__eyebrow">Old Shakespeare</p>
              <h2>An English-style atmosphere in Northern Cyprus</h2>
              <p>
                We invite you to visit an unforgettable restaurant with a pleasant
                English-style atmosphere.
              </p>
              <p>
                With interesting antiques and pleasant music, you can relax and enjoy
                dishes prepared by our team.
              </p>
            </div>
          </article>

          <div className="about-details">
            <article className="about-detail">
              <img src="/images/about/bar.jpg" alt="The bar at Old Shakespeare" />
              <div className="about-detail__content">
                <p>The bar</p>
                <h2>A comfortable place for an evening and good company.</h2>
              </div>
            </article>

            <article className="about-detail">
              <img src="/images/about/food.jpg" alt="A dish prepared at Old Shakespeare" />
              <div className="about-detail__content">
                <p>Our kitchen</p>
                <h2>Delicious, professionally prepared food of high quality.</h2>
              </div>
            </article>
          </div>
        </aside>
      </div>
    </main>
  )
}
