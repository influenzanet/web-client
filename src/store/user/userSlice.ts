import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, ContactPreferences } from '../../types/user';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    account: {
      type: '',
      accountId: '',
      accountConfirmedAt: 0,
      preferredLanguage: 'en',
    },
    roles: [],
    timestamps: {
      createdAt: 0,
      updatedAt: 0,
      lastLogin: 0,
      lastTokenRefresh: 0,
    },
    profiles: [],
    contactPreferences: {
      subscribedToNewsletter: false,
      sendNewsletterTo: [],
    } as ContactPreferences,
    contanctInfos: [],
  } as User,
  reducers: {},
});

export default userSlice;
