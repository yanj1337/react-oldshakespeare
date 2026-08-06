import { useEffect } from 'react'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import './NotFoundPage.css'

export function NotFoundPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Page not found | Old Shakespeare'

    return () => {
      document.title = previousTitle
    }
  }, [])

  function goBack() {
    if (window.history.length > 1) {
      window.history.back()
      return
    }

    window.location.href = '/'
  }

  return (
    <main className="not-found-page">
      <section className="not-found-panel" aria-labelledby="not-found-title">
        <SiteHeader />

        <div className="not-found-content">
          <div className="not-found-code">
            <span aria-hidden="true" />
            <h1 id="not-found-title">404</h1>
            <span aria-hidden="true" />
          </div>

          <p>Unfortunately the page you are looking for could not be found.</p>

          <button className="not-found-back" type="button" onClick={goBack}>
            Go back
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    </main>
  )
}
