import { useState } from 'react'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import './ReservationPage.css'

export function ReservationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="reservation-page" id="top">
      <div className="reservation-layout">
        <section className="reservation-hero" aria-labelledby="reservation-title">
          <img
            className="reservation-hero__image"
            src="/images/home/reservation.jpg"
            alt="A reserved table at Old Shakespeare Pub & Restaurant"
          />

          <SiteHeader />

          <div className="reservation-hero__content">
            <p>Old Shakespeare</p>
            <h1 id="reservation-title">
              <span>Book</span>
              <span>a table</span>
            </h1>
          </div>
        </section>

        <section className="reservation-details" aria-labelledby="reservation-form-title">
          <div className="reservation-card">
            <div className="reservation-card__intro">
              <p className="reservation-card__eyebrow">Reservations</p>
              <h2 id="reservation-form-title">Reserve your table</h2>
              <p className="reservation-card__copy">
                Join us for good food, warm hospitality and an evening to remember
                at Old Shakespeare.
              </p>
            </div>

            <form className="reservation-form" onSubmit={handleSubmit}>
              <label className="reservation-field">
                <span>Name</span>
                <input name="name" type="text" placeholder="Jane Smith" required />
              </label>

              <label className="reservation-field">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                />
              </label>

              <label className="reservation-field">
                <span>Phone number</span>
                <input name="phone" type="tel" placeholder="+90 533 000 00 00" required />
              </label>

              <label className="reservation-field">
                <span>People</span>
                <input name="people" type="number" min="1" max="20" placeholder="2" required />
              </label>

              <label className="reservation-field">
                <span>Date</span>
                <input name="date" type="date" required />
              </label>

              <label className="reservation-field">
                <span>Time</span>
                <input name="time" type="time" required />
              </label>

              <button className="reservation-form__submit" type="submit">
                Book a table
              </button>

              {isSubmitted && (
                <p className="reservation-form__status" role="status">
                  Thank you. Your reservation request is ready for confirmation.
                </p>
              )}
            </form>
          </div>

          <footer className="reservation-footer">
            <span>Old Shakespeare Pub &amp; Restaurant</span>
            <a href="/">Back home</a>
          </footer>
        </section>
      </div>
    </main>
  )
}
