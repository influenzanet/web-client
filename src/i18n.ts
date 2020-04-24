import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';


i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'de',
    fallbackLng: 'en',
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: process.env.PUBLIC_URL + '/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      useSuspense: true
    }

  });
export default i18n;
