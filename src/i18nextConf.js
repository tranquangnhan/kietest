import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

const fallbackLng = ['vi'];
const availableLanguages = ['en', 'vi'];

i18n
  .use(XHR) // load ngôn ngữ dịch
  .use(LanguageDetector) // Check ngôn ngữ
  .use(initReactI18next) 
  .init({
    fallbackLng, //load ngôn ngữ dự phòng.

    detection: {
      checkWhitelist: true, 
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;