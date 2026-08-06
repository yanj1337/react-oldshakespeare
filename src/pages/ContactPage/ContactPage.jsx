import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import './ContactPage.css'

const phoneNumber = '+90 542 851 44 99'
const phoneLink = '+905428514499'
const mapLink = 'https://goo.gl/maps/GRi6fAPF6KPx9YLt7'
const mapEmbed =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1568.4692866537932!2d33.5293684112149!3d35.34063953224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de47904146bb15%3A0x51f8b427376ec901!2sOld%20Shakespeare%20Pub%26Restaurant!5e0!3m2!1sen!2s!4v1678835314519!5m2!1sen!2s'

const openingHours = [
  ['Tuesday', '12:00 - 01:30'],
  ['Wednesday', '12:00 - 01:30'],
  ['Thursday', '12:00 - 01:30'],
  ['Friday', '12:00 - 01:30'],
  ['Saturday', '12:00 - 01:30'],
  ['Sunday', '12:00 - 01:30'],
  ['Monday', 'Closed'],
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
  return (
    <main className="contact-page" id="top">
      <div className="contact-layout">
        <section className="contact-hero" aria-labelledby="contact-title">
          <img
            className="contact-hero__image"
            src="/images/home/menu.jpg"
            alt="A dish served at Old Shakespeare Pub & Restaurant"
          />

          <SiteHeader />

          <h1 id="contact-title">
            <span>Get in</span>
            <span>touch</span>
          </h1>
        </section>

        <section className="contact-side" aria-label="Old Shakespeare contact details">
          <div className="contact-grid">
            <article className="contact-panel contact-opening">
              <h2>Opening</h2>

              <div className="contact-opening__list">
                {openingHours.map(([day, hours]) => (
                  <div
                    className={day === 'Monday' ? 'contact-opening__row is-closed' : 'contact-opening__row'}
                    key={day}
                  >
                    <span>{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>

              <p className="contact-opening__note">Open until the last guest.</p>
            </article>

            <div className="contact-gallery" aria-label="Old Shakespeare restaurant gallery">
              <img src="/images/home/reservation.jpg" alt="Table setting at Old Shakespeare" />
              <img src="/images/home/hero-interior.jpg" alt="Old Shakespeare dining room" />
              <img src="/images/home/about.jpg" alt="Old Shakespeare terrace" />
              <img src="/images/home/menu.jpg" alt="Dish from the Old Shakespeare menu" />
            </div>

            <div className="contact-map">
              <iframe
                src={mapEmbed}
                title="Old Shakespeare Pub & Restaurant location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={mapLink} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </div>

            <article className="contact-panel contact-info">
              <h2>Contact</h2>

              <dl className="contact-info__list">
                <div>
                  <dt>Address</dt>
                  <dd>
                    <a href={mapLink} target="_blank" rel="noreferrer">
                      Turtle Bay Sitesi 99400
                      <span>Esentepe, Northern Cyprus</span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Phone &amp; WhatsApp</dt>
                  <dd>
                    <a href={`tel:${phoneLink}`}>{phoneNumber}</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:oldshakespearepub@gmail.com">
                      oldshakespearepub@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="contact-follow">
                <p>Follow</p>
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
            <a href="/">Back home</a>
          </footer>
        </section>
      </div>
    </main>
  )
}
