export const updateObject = (oldObject: any, updatedProperties: any) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const updateArrayItemById = (values: any[], item: any): any[] => {
  const ind = values.findIndex((inv: any) => inv.id === item.id);
  if (ind < 0) {
    return values;
  }
  const items = [...values];
  items[ind] = item;
  return items;
}
