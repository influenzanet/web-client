import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateObject } from '../utils';

export interface APIState {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    accessToken: '',
    refreshToken: '',
    expiresAt: 0,
  } as APIState,
  reducers: {
    setState: (state, action: PayloadAction<APIState>) => {
      return updateObject(state, action.payload);
    },
  },
});

export const apiActions = apiSlice.actions;

export default apiSlice;
