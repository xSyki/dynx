import i18n, { use } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

export enum LanguageEnum {
  'PL' = 'pl',
  'EN' = 'en',
}

use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: LanguageEnum.PL,
    fallbackLng: LanguageEnum.PL,

    keySeparator: false,

    resources: {
      pl: {
        translations: require('../locales/pl/translations.json'),
      },
      en: {
        translations: require('../locales/en/translations.json'),
      },
    },

    ns: 'translations',
    defaultNS: 'translations',

    debug: process.env.NODE_ENV !== 'production',

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: true,
    },
  })

i18n.languages = [LanguageEnum.PL, LanguageEnum.EN]

export default i18n
