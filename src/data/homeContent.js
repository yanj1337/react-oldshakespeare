export const navigationItems = [
  { translationKey: "header.menu", href: "/menu" },
  { translationKey: "header.about", href: "/about" },
  //{ label: 'Contact', href: '/contact' }, #замена на translationkey
];

export const buttonMenuItems = [
  { translationKey: "buttonMenu.menu", href: "/menu" },
  { translationKey: "buttonMenu.bookTable", href: "/reservation" },
  { translationKey: "buttonMenu.about", href: "/about" },
  { translationKey: "buttonMenu.contact", href: "/contact" },
  //{ translationKey: "buttonMenu.blogSoon", isDisabled: true },
];

export const homeCards = [
  {
    id: "menu",
    translationKey: "homeCards.menu",
    href: "/menu",
    image: "/images/home/menu.jpg",
    alt: "Old Shakespeare restaurant menu",
  },
  {
    id: "reservation",
    translationKey: "homeCards.bookTable",
    href: "/reservation",
    image: "/images/home/reservation.jpg",
    alt: "Reserved table at a restaurant",
  },
  {
    id: "about",
    translationKey: "homeCards.about",
    href: "/about",
    image: "/images/home/about.jpg",
    alt: "Old Shakespeare restaurant terrace in Esentepe",
  },
];
