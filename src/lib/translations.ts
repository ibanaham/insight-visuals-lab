
type Translation = {
  [key: string]: {
    [key: string]: string;
  };
};

export const translations: Translation = {
  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    cv: "CV",
    contact: "Contact",
    // Add more translations as needed
  },
  es: {
    home: "Inicio",
    services: "Servicios",
    portfolio: "Portafolio",
    cv: "Currículum",
    contact: "Contacto",
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    portfolio: "المعرض",
    cv: "السيرة الذاتية",
    contact: "اتصل بنا",
  },
  sw: {
    home: "Nyumbani",
    services: "Huduma",
    portfolio: "Kazi",
    cv: "Wasifu",
    contact: "Wasiliana",
  },
  fr: {
    home: "Accueil",
    services: "Services",
    portfolio: "Portfolio",
    cv: "CV",
    contact: "Contact",
  },
};

export const useTranslation = (lang: string) => {
  return (key: string) => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };
};
