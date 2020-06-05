import { RootState } from ".";

const stateKey = 'state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(stateKey);
    if (serializedState === null) {
      return undefined;
    }
    const loadedState = JSON.parse(serializedState);
    return loadedState;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    if (state.general.persistState) {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(stateKey, serializedState);
    }
    else {
      localStorage.removeItem(stateKey);
    }
  } catch {
    // ignore write errors
  }
};

export const removePersistedState = () => {
  try {
    localStorage.removeItem(stateKey);
  } catch (error) {
    console.error(error);
  }
}
