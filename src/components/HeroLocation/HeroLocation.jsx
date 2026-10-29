import { useLanguage } from '../../i18n/LanguageContext'
import './HeroLocation.css'

export function HeroLocation() {
  const { t } = useLanguage()

  return <p className="hero-location">{t('hero.location')}</p>
}
