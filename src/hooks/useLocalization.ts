import { LocalizedObject, LocalizedString } from "survey-engine/lib/data_types";
import i18n from "../i18n";

export const useLocalization = () => {

  const getLocalizationByLocaleCode = (translations: LocalizedObject[] | undefined, code: string): string | undefined => {
    if (!translations) { return; }
    const translation = (translations.find(cont => cont.code === code) as LocalizedString);
    if (!translation) { return }
    return translation.parts.map(p => p.str).join('');
  }

  const getLocalization = (translations: LocalizedObject[] | undefined) => getLocalizationByLocaleCode(translations, i18n.language);

  return getLocalization;
}
