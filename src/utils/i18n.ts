import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header_btn_1: 'COMMUNITY',
      header_btn_2: 'MINDUSTRY',
      header_btn_3: 'SOMETHING',
      news: 'NEWS',
      discord: 'DISCORD',
      github: 'GITHUB',
      sign_in: 'Sign in'
    },
  },
  ru: {
    translation: {
      header_btn_1: 'СООБЩЕСТВО',
      header_btn_2: 'MINDUSTRY',
      header_btn_3: 'SOMETHING',
      news: 'НОВОСТИ',
      discord: 'DISCORD',
      github: 'GITHUB',
      sign_in: 'Войти'
    },
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: navigator.language,
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
