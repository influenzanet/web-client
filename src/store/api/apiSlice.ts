import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface APIState {
  loggedIn: boolean;
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

const apiSlice = createSlice({
  name: 'api',
  initialState: {} as APIState,
  reducers: {},
});

export default apiSlice;
