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
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateKey, serializedState);
  } catch {
    // ignore write errors
  }
};
