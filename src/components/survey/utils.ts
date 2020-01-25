import { ItemComponent, LocalizedString } from "survey-engine/lib/data_types";


export const getItemComponentTranslationByRole = (components: Array<ItemComponent>, role: string, code: string): string | null => {
  const comp = components.find(comp => comp.role === role);
  if (!comp || comp.displayCondition === false) {
    return null;
  }
  const translation = getLocaleStringTextByCode(comp, code);
  if (!translation) {
    console.warn('no translation found for given language code: ' + code);
    return null;
  }
  return translation;
}

export const getLocaleStringTextByCode = (comp: ItemComponent, code: string): string | undefined => {
  const translation = (comp.content?.find(cont => cont.code === code) as LocalizedString);
  if (!translation) { return }
  return translation.parts.map(p => p.str).join('');
}

export const getItemComponentByRole = (components: Array<ItemComponent>, role: string): ItemComponent | undefined => {
  return components.find(comp => comp.role === role);

}

export const getItemComponentsByRole = (components: Array<ItemComponent>, role: string): ItemComponent[] => {
  return components.filter(comp => comp.role === role);
}
