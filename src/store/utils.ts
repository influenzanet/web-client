import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { RootState } from ".";
import { useDispatch } from "react-redux";

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

export type AppThunk<ReturnType> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>

export type ReduxDispatch = ThunkDispatch<RootState, any, Action>;
export function useReduxDispatch(): ReduxDispatch {
  return useDispatch<ReduxDispatch>();
}
