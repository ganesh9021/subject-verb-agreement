import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

i18n
  .use(
    resourcesToBackend((lng, ns) => import(`../language//${ns}_${lng}.json`))
  )
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
