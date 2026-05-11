import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ko from "./ko.json";

// i18n 초기화 및 설정
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
    },
    lng: "ko-KR", // 기본 언어 설정
    fallbackLng: {
      "ko-KR": ["ko-KR"],
      default: ["en-US"],
    },
    debug: true,
    defaultNS: "translation",
    ns: "translation",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
