import { ButtonMenu } from '../ButtonMenu/ButtonMenu'
import { navigationItems } from '../../data/homeContent'
import './SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <ButtonMenu />

      <a className="site-header__brand" href="/" aria-label="Old Shakespeare home">
        <img src="/images/old-shakespeare-logo.png" alt="" />
      </a>

      <nav className="site-header__desktop-nav" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="booking-button" href="/reservation">
        Book a table
      </a>

    </header>
  )
}
