import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateObject } from '../utils';

export interface GeneralState {
  instanceId: string;
  persistState: boolean;
}

const generalSlice = createSlice({
  name: 'general',
  initialState: {
    instanceID: 'germany',
    persistState: false,
  },
  reducers: {
    setPersistState: (state, action: PayloadAction<boolean>) => {
      return updateObject(state, { persistState: action.payload });
    }
  },
});

export const generalActions = generalSlice.actions;

export default generalSlice;
