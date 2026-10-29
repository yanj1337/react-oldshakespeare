import { HeroContent } from '../../components/HeroContent/HeroContent'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import { HeroLocation } from '../../components/HeroLocation/HeroLocation'
import { useLanguage } from '../../i18n/LanguageContext'
import './AboutPage.css'

export function AboutPage() {
  const { t } = useLanguage()

  return (
    <main className="about-page" id="top">
      <div className="about-layout">
        <section className="about-hero" aria-labelledby="about-title">
          <img
            className="about-hero__image"
            src="/images/about/dining-room.jpg"
            alt={t('aboutPage.imageAlt')}
          />

          <SiteHeader />

          <HeroContent>
            <HeroLocation />
            <h1 id="about-title">
              {t('aboutPage.title').split('\n').map((line, index) => (
                <span key={line}>{index > 0 ? ' ' : ''}{line}</span>
              ))}
            </h1>
          </HeroContent>
        </section>

        <aside className="about-side" aria-label={t('aboutPage.sectionLabel')}>
          <article className="about-story">
            <img
              className="about-story__image"
              src="/images/about/antiques.jpg"
              alt={t('aboutPage.storyImageAlt')}
            />
            <div className="about-story__content">
              <p className="about-story__eyebrow">Old Shakespeare</p>
              <h2>{t('aboutPage.storyTitle')}</h2>
              <p>
                {t('aboutPage.storyIntro')}
              </p>
              <p>
                {t('aboutPage.storyDescription')}
              </p>
            </div>
          </article>

          <div className="about-details">
            <article className="about-detail">
              <img src="/images/about/bar.jpg" alt={t('aboutPage.barImageAlt')} />
              <div className="about-detail__content">
                <p>{t('aboutPage.barLabel')}</p>
                <h2>{t('aboutPage.barTitle')}</h2>
              </div>
            </article>

            <article className="about-detail">
              <img src="/images/about/food.jpg" alt={t('aboutPage.kitchenImageAlt')} />
              <div className="about-detail__content">
                <p>{t('aboutPage.kitchenLabel')}</p>
                <h2>{t('aboutPage.kitchenTitle')}</h2>
              </div>
            </article>
          </div>
        </aside>
      </div>
    </main>
  )
}
