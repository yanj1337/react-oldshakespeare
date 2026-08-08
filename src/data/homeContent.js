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
  { translationKey: "buttonMenu.blogSoon", isDisabled: true },
];

export const homeCards = [
  {
    id: "menu",
    title: "Menu",
    href: "/menu",
    image: "/images/home/menu.jpg",
    alt: "Old Shakespeare restaurant menu",
  },
  {
    id: "reservation",
    title: "Reservation",
    href: "/reservation",
    image: "/images/home/reservation.jpg",
    alt: "Reserved table at a restaurant",
  },
  {
    id: "about",
    title: "Our Restaurant",
    href: "/about",
    image: "/images/home/about.jpg",
    alt: "Old Shakespeare restaurant terrace in Esentepe",
  },
];
