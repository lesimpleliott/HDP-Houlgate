// Données des cartes de la section "Footer"
// Les données sont traduites dans src/locales/{lang}/translation.json

type FooterListTypes = {
  text: string;
  type: "Navlink" | "External";
  link: string;
};

// Navigation data
export const navigationData: FooterListTypes[] = [
  {
    text: "menu.home",
    type: "Navlink",
    link: "/",
  },
  {
    text: "menu.rooms",
    type: "Navlink",
    link: "/rooms",
  },
  {
    text: "menu.prices",
    type: "Navlink",
    link: "/prices",
  },
  {
    text: "menu.contact",
    type: "Navlink",
    link: "/contact",
  },
];

// Informations data
export const informationsData: FooterListTypes[] = [
  {
    text: "footer.booking",
    type: "External",
    // link: "https://hotel.reservit.com/reservit/reserhotel.php?hotelid=237827&lang=fr",
    link: "https://hotel.reservit.com/reservit/reserhotel.php?hotelid=237827",
  },
  {
    text: "footer.services",
    type: "Navlink",
    link: "/",
  },
  {
    text: "footer.reviews",
    type: "Navlink",
    link: "/",
  },
  {
    text: "footer.access",
    type: "Navlink",
    link: "/",
  },
  {
    text: "footer.faq",
    type: "Navlink",
    link: "/",
  },
];

// Legal data
export const legalData: FooterListTypes[] = [
  {
    text: "footer.terms",
    type: "Navlink",
    link: "/",
  },
  {
    text: "footer.legalNotice",
    type: "Navlink",
    link: "/",
  },
  {
    text: "footer.privacy",
    type: "Navlink",
    link: "/",
  },
];
