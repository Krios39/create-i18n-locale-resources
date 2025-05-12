// import { initReactI18next } from 'react-i18next';
//
// import i18next from 'i18next';
// import HttpApi from 'i18next-http-backend';
// import ICU from 'i18next-icu';
//
// import { Language, languageStorage } from '@/features/language';
//
// import { resourcesEN } from './resources/en';
// import { resourcesRU } from './resources/ru';
//
// export const resources = {
//   [Language.En]: resourcesEN,
//   [Language.Ru]: resourcesRU,
// };
//
// i18next
//   .use(HttpApi)
//   .use(ICU)
//   .use(initReactI18next)
//   .init({
//     lng: languageStorage.getCurrent() ?? Language.En,
//     fallbackLng: Language.En,
//     resources: resources,
//     debug: process.env.NODE_ENV !== 'production',
//     react: {
//       useSuspense: false,
//     },
//   });
//
// export default i18next;
