import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateObject } from '../utils';

export interface APIState {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

const initialState: APIState = {
  accessToken: '',
  refreshToken: '',
  expiresAt: 0,
} as APIState;

const apiSlice = createSlice({
  name: 'api',
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
      return state;
    },
    setState: (state, action: PayloadAction<APIState>) => {
      return updateObject(state, action.payload);
    },
  },
});

export const apiActions = apiSlice.actions;

export default apiSlice;
