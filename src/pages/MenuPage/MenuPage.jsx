import { HeroContent } from '../../components/HeroContent/HeroContent'
import { useState } from 'react'
import { SiteHeader } from '../../components/SiteHeader/SiteHeader'
import { HeroLocation } from '../../components/HeroLocation/HeroLocation'
import { useLanguage } from '../../i18n/LanguageContext'
import { drinksMenu, foodMenu } from '../../data/menuContent'
import './MenuPage.css'

const menuViews = {
  food: foodMenu,
  drinks: drinksMenu,
}

function MenuGroup({ group }) {
  return (
    <article className={`menu-group menu-group--${group.id}`}>
      <h3>{group.title}</h3>

      <ul>
        {group.items.map((item) => (
          <li className="menu-item" key={item.name}>
            <span className="menu-item__name">
              {item.name}
              {item.detail && <small>{item.detail}</small>}
            </span>
            <span className="menu-item__leader" aria-hidden="true" />
            <span className="menu-item__price">{item.price} ₺</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function MenuPage() {
  const { t } = useLanguage()
  const [activeMenu, setActiveMenu] = useState('food')
  const activeGroups = menuViews[activeMenu]

  return (
    <main className="menu-page" id="top">
      <div className="menu-layout">
        <section className="menu-hero" aria-labelledby="menu-title">
          <img
            className="menu-hero__image"
            src="/images/home/menu.jpg"
            alt="A dish prepared at Old Shakespeare Pub & Restaurant"
          />

          <SiteHeader />

          <HeroContent>
            <HeroLocation />
            <h1 id="menu-title">
              {t('menuPage.title').split('\n').map((line, index) => (
                <span key={line}>{index > 0 ? ' ' : ''}{line}</span>
              ))}
            </h1>
          </HeroContent>
        </section>

        <section className="menu-panel" aria-labelledby="menu-panel-title">
          <header className="menu-panel__header">
            <div>
              <p>Old Shakespeare</p>
              <h2 id="menu-panel-title">{activeMenu}</h2>
            </div>

            <div className="menu-switcher" role="tablist" aria-label="Menu sections">
              {Object.keys(menuViews).map((menuName) => (
                <button
                  className={activeMenu === menuName ? 'is-active' : ''}
                  id={`${menuName}-tab`}
                  type="button"
                  role="tab"
                  aria-controls={`${menuName}-panel`}
                  aria-selected={activeMenu === menuName}
                  key={menuName}
                  onClick={() => setActiveMenu(menuName)}
                >
                  {menuName}
                </button>
              ))}
            </div>
          </header>

          <div
            className={`menu-groups menu-groups--${activeMenu}`}
            id={`${activeMenu}-panel`}
            role="tabpanel"
            aria-labelledby={`${activeMenu}-tab`}
            key={activeMenu}
          >
            {activeGroups.map((group) => (
              <MenuGroup group={group} key={group.id} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
