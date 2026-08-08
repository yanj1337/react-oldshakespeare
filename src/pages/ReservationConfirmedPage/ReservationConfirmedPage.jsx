import { useEffect } from 'react'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import './ReservationConfirmedPage.css'

export function ReservationConfirmedPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Reservation confirmed | Old Shakespeare'

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <main className="reservation-confirmed-page" id="top">
      <div className="reservation-confirmed-layout">
        <section
          className="reservation-confirmed-hero"
          aria-labelledby="reservation-confirmed-hero-title"
        >
          <img
            className="reservation-confirmed-hero__image"
            src="/images/home/reservation.jpg"
            alt="A reserved table at Old Shakespeare Pub & Restaurant"
          />

          <SiteHeader />

          <div className="reservation-confirmed-hero__content">
            <p>Old Shakespeare</p>
            <h1 id="reservation-confirmed-hero-title">
              <span>Book</span>
              <span>a table</span>
            </h1>
          </div>
        </section>

        <section
          className="reservation-confirmed-details"
          aria-labelledby="reservation-confirmed-title"
        >
          <div className="reservation-confirmed-card">
            <div className="reservation-confirmed-content">
              <div className="reservation-confirmed-intro">
                <div className="reservation-confirmed-heading">
                  <span aria-hidden="true" />
                  <h2 id="reservation-confirmed-title">Thank You</h2>
                  <span aria-hidden="true" />
                </div>

                <p>
                  Thank you for reserving a table with us! We can’t wait to welcome
                  you to Old Shakespeare and share a memorable evening with you.
                </p>
              </div>

              <div className="reservation-confirmed-information">
                <div>
                  <h3>Additional Information</h3>
                  <p>
                    Please arrive 10 minutes early to ensure your table is ready. If
                    you need to cancel, please notify us at least 24 hours in advance.
                  </p>
                </div>

                <a href="/menu">Explore our menu</a>
              </div>
            </div>
          </div>

          <footer className="reservation-confirmed-footer">
            <span>Old Shakespeare Pub &amp; Restaurant</span>
            <a href="/">Back home</a>
          </footer>
        </section>
      </div>
    </main>
  )
}
