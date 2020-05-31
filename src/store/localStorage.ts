import { RootState } from ".";

const stateKey = 'state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(stateKey);
    if (serializedState === null) {
      return { undefined };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    let stateToSave: RootState = (state.general.persistState) ? state : {} as RootState;
    const serializedState = JSON.stringify(stateToSave);
    localStorage.setItem(stateKey, serializedState);
  } catch {
    // ignore write errors
  }
};
