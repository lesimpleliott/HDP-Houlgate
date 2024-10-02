import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../locales/en/translation.json";
import fr from "../../locales/fr/translation.json";

const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
};

// Fonction pour déterminer la langue à utiliser
const determineLang = (lang: string) => {
  // Si la langue du navigateur est "fr" ou "en", on l'utilise, sinon on retourne "fr" par défaut
  return ["fr", "en"].includes(lang) ? lang : "fr";
};

// Fonction pour initialiser la langue de l'application
export const initLanguage = () => {
  const navLang = navigator.language.split(/[-_]/)[0]; // ex : "en-US" -> "en", "fr-FR" -> "fr"
  const localLang = localStorage.getItem("lang");

  if (localLang) {
    // Si une langue est déjà définie dans le localStorage
    i18n.changeLanguage(localLang);
  } else {
    // Si aucune langue n'est définie dans le localStorage
    const appLang = determineLang(i18n.language || navLang);
    localStorage.setItem("lang", appLang);
    i18n.changeLanguage(appLang);
  }
};

// Configuration i18n
export default i18n.use(initReactI18next).init({
  resources,
  debug: false, // true: active le mode debug
  lng: "fr", // langue par défaut
  fallbackLng: "fr", // langue par défaut si la langue actuelle n'est pas disponible
  interpolation: {
    escapeValue: false,
  },
});

// Fonction pour basculer entre les langues ou définir une langue spécifique
export const toggleLanguage = (langProp?: string) => {
  let lang;
  if (langProp) {
    lang = langProp as "fr" | "en";
  } else {
    lang = i18n.language === "fr" ? "en" : "fr";
  }
  i18n.changeLanguage(lang);
  localStorage.setItem("lang", lang);
};
