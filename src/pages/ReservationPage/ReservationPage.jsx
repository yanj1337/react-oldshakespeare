import { HeroContent } from '../../components/HeroContent/HeroContent'
import { SiteHeader } from "../../components/SiteHeader/SiteHeader";
import { HeroLocation } from "../../components/HeroLocation/HeroLocation";
import { useLanguage } from "../../i18n/LanguageContext";
import "./ReservationPage.css";

export function ReservationPage() {
  const { t, localizePath } = useLanguage();

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = localizePath("/reservation-confirmed");
  }

  return (
    <main className="reservation-page" id="top">
      <div className="reservation-layout">
        <section
          className="reservation-hero"
          aria-labelledby="reservation-title"
        >
          <img
            className="reservation-hero__image"
            src="/images/home/reservation.jpg"
            alt={t("reservationPage.imageAlt")}
          />

          <SiteHeader />

          <HeroContent>
            <HeroLocation />
            <h1 id="reservation-title">
              {t("reservationPage.title").split("\n").map((line, index) => (
                <span key={line}>{index > 0 ? " " : ""}{line}</span>
              ))}
            </h1>
          </HeroContent>
        </section>

        <section
          className="reservation-details"
          aria-labelledby="reservation-form-title"
        >
          <div className="reservation-card">
            <div className="reservation-card__intro">
              <p className="reservation-card__eyebrow">{t("reservationPage.eyebrow")}</p>
              <h2 id="reservation-form-title">{t("reservationPage.formTitle")}</h2>
              <p className="reservation-card__copy">
                {t("reservationPage.description")}
              </p>
            </div>

            <form className="reservation-form" onSubmit={handleSubmit}>
              <label className="reservation-field">
                <span>{t("reservationPage.name")}</span>
                <input
                  name="name"
                  type="text"
                  placeholder={t("reservationPage.namePlaceholder")}
                  required
                />
              </label>

              <label className="reservation-field">
                <span>{t("reservationPage.email")}</span>
                <input
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                />
              </label>

              <label className="reservation-field">
                <span>{t("reservationPage.whatsappNumber")}</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+90 533 000 00 00"
                  required
                />
              </label>

              <label className="reservation-field">
                <span>{t("reservationPage.guests")}</span>
                <input
                  name="people"
                  type="number"
                  min="1"
                  max="15"
                  placeholder="2"
                  required
                />
              </label>

              <label className="reservation-field">
                <span>{t("reservationPage.date")}</span>
                <input name="date" type="date" required />
              </label>

              <label className="reservation-field">
                <span>{t("reservationPage.time")}</span>
                <input name="time" type="time" required />
              </label>

              <button className="reservation-form__submit" type="submit">
                {t("reservationPage.bookTable")}
              </button>
            </form>
          </div>

          <footer className="reservation-footer">
            <span>Old Shakespeare Pub &amp; Restaurant</span>
            <a href={localizePath("/")}>{t("reservationPage.backHome")}</a>
          </footer>
        </section>
      </div>
    </main>
  );
}
