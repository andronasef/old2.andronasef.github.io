import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};
const initI18n = (lang: string) => {
  i18n.use(initReactI18next).init({
    resources,
    lng: lang,
    supportedLngs: ["en", "ar"],
    interpolation: {
      escapeValue: false,
    },
  });
};
export default i18n;
export { initI18n };
