import { HomePage } from './pages/HomePage/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { MenuPage } from './pages/MenuPage/MenuPage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { ReservationPage } from './pages/ReservationPage/ReservationPage'

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'

  if (currentPath === '/') {
    return <HomePage />
  }

  if (currentPath === '/reservation') {
    return <ReservationPage />
  }

  if (currentPath === '/contact') {
    return <ContactPage />
  }

  if (currentPath === '/menu') {
    return <MenuPage />
  }

  if (currentPath === '/about') {
    return <AboutPage />
  }

  return <NotFoundPage />
}

export default App
