import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GeneralState {
  instanceID: string;
}

const generalSlice = createSlice({
  name: 'general',
  initialState: {
    instanceID: 'germany',
  },
  reducers: {},
});

export default generalSlice;
