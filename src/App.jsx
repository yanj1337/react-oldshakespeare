import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ReservationConfirmedPage } from "./pages/ReservationConfirmedPage/ReservationConfirmedPage";
import { ReservationPage } from "./pages/ReservationPage/ReservationPage";
import { useLanguage } from "./i18n/LanguageContext";

function App() {
  //const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'     #роутер теперь в LanguageProvider

  const { routePath: currentPath } = useLanguage();

  if (currentPath === "/") {
    return <HomePage />;
  }

  if (currentPath === "/reservation") {
    return <ReservationPage />;
  }

  if (
    currentPath === "/reservation-confirmed" ||
    currentPath === "/reservation-confirm"
  ) {
    return <ReservationConfirmedPage />;
  }

  if (currentPath === "/contact") {
    return <ContactPage />;
  }

  if (currentPath === "/menu") {
    return <MenuPage />;
  }

  if (currentPath === "/about") {
    return <AboutPage />;
  }

  return <NotFoundPage />;
}

export default App;
