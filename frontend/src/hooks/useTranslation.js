import { useSelector } from "react-redux";
import enTranslations from "../translations/en.json";
import hiTranslations from "../translations/hi.json";

export const useTranslation = () => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const translations =
    currentLanguage === "en" ? enTranslations : hiTranslations;

  return (key) => translations[key] || key;
};
