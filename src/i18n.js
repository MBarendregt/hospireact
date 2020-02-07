import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
// import translationEN from './translations/locales/en/translations.json';
// import translationNL from './translations/locales/nl/translations.json';


// the translations
// const resources = {
//     en: {
//         translation: translationEN
//     },
//     nl: {
//         translation: translationNL
//     }
// };

i18n
    .use(detector)
    .use(backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // resources,
        debug: true,
        lng: "en",
        fallbackLng: "en",
        // keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {
            // wait: true,
            useSuspense: false
        }
    });

export default i18n;