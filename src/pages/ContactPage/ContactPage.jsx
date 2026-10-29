import { HeroContent } from '../../components/HeroContent/HeroContent'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import { HeroLocation } from '../../components/HeroLocation/HeroLocation'
import { useLanguage } from '../../i18n/LanguageContext'
import './ContactPage.css'

const phoneNumber = '+90 542 851 44 99'
const phoneLink = '+905428514499'
const mapLink = 'https://goo.gl/maps/GRi6fAPF6KPx9YLt7'
const mapEmbed =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1568.4692866537932!2d33.5293684112149!3d35.34063953224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de47904146bb15%3A0x51f8b427376ec901!2sOld%20Shakespeare%20Pub%26Restaurant!5e0!3m2!1sen!2s!4v1678835314519!5m2!1sen!2s'

const openingHours = [
  ['tuesday', '12:00 - 01:30'],
  ['wednesday', '12:00 - 01:30'],
  ['thursday', '12:00 - 01:30'],
  ['friday', '12:00 - 01:30'],
  ['saturday', '12:00 - 01:30'],
  ['sunday', '12:00 - 01:30'],
  ['monday', null],
]

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/905428514499',
    icon: 'whatsapp-icon',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/oldshakespearepub/',
    icon: 'instagram-icon',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/oldshakespearepub/',
    icon: 'facebook-icon',
  },
]

export function ContactPage() {
  const { t, localizePath } = useLanguage()

  return (
    <main className="contact-page" id="top">
      <div className="contact-layout">
        <section className="contact-hero" aria-labelledby="contact-title">
          <img
            className="contact-hero__image"
            src="/images/home/menu.jpg"
            alt={t('contactPage.imageAlt')}
          />

          <SiteHeader />

          <HeroContent>
            <HeroLocation />
            <h1 id="contact-title">
              {t('contactPage.title').split('\n').map((line, index) => (
                <span key={line}>{index > 0 ? ' ' : ''}{line}</span>
              ))}
            </h1>
          </HeroContent>
        </section>

        <section className="contact-side" aria-label={t('contactPage.sectionLabel')}>
          <div className="contact-grid">
            <article className="contact-panel contact-opening">
              <h2>{t('contactPage.openingTitle')}</h2>

              <div className="contact-opening__list">
                {openingHours.map(([day, hours]) => (
                  <div
                    className={hours === null ? 'contact-opening__row is-closed' : 'contact-opening__row'}
                    key={day}
                  >
                    <span>{t(`contactPage.${day}`)}</span>
                    <span>{hours ?? t('contactPage.closed')}</span>
                  </div>
                ))}
              </div>

              <p className="contact-opening__note">{t('contactPage.openingNote')}</p>
            </article>

            <div className="contact-gallery" aria-label={t('contactPage.galleryLabel')}>
              <img src="/images/home/reservation.jpg" alt={t('contactPage.tableImageAlt')} />
              <img src="/images/home/hero-interior.jpg" alt={t('contactPage.interiorImageAlt')} />
              <img src="/images/home/about.jpg" alt={t('contactPage.terraceImageAlt')} />
              <img src="/images/home/menu.jpg" alt={t('contactPage.dishImageAlt')} />
            </div>

            <div className="contact-map">
              <iframe
                src={mapEmbed}
                title={t('contactPage.mapTitle')}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={mapLink} target="_blank" rel="noreferrer">
                {t('contactPage.directions')}
              </a>
            </div>

            <article className="contact-panel contact-info">
              <h2>{t('contactPage.contactTitle')}</h2>

              <dl className="contact-info__list">
                <div>
                  <dt>{t('contactPage.address')}</dt>
                  <dd>
                    <a href={mapLink} target="_blank" rel="noreferrer">
                      Turtle Bay Sitesi 99400
                      <span>{t('contactPage.addressLocation')}</span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>{t('contactPage.phoneWhatsapp')}</dt>
                  <dd>
                    <a href={`tel:${phoneLink}`}>{phoneNumber}</a>
                  </dd>
                </div>
                <div>
                  <dt>{t('contactPage.email')}</dt>
                  <dd>
                    <a href="mailto:oldshakespearepub@gmail.com">
                      oldshakespearepub@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="contact-follow">
                <p>{t('contactPage.follow')}</p>
                <div className="contact-follow__links">
                  {socialLinks.map((social) => (
                    <a
                      aria-label={social.label}
                      href={social.href}
                      key={social.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg aria-hidden="true">
                        <use href={`/icons.svg#${social.icon}`} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <footer className="contact-footer">
            <span>© 2026 Old Shakespeare</span>
            <a href={localizePath('/')}>{t('contactPage.backHome')}</a>
          </footer>
        </section>
      </div>
    </main>
  )
}
