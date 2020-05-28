import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, ContactPreferences } from '../../types/user';
import { TokenResponse } from '../../types/auth-api';
import { updateObject } from '../utils';
import i18n from '../../i18n';

export interface UserState {
  currentUser: User,
  selectedProfileId: string,
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
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
      contactInfos: [],
    } as User,
    selectedProfileId: '',
  } as UserState,
  reducers: {
    setLastTokenRefresh: (state, action: PayloadAction<number>) => {
      return updateObject(state, {
        currentUser: {
          timestamps: {
            lastTokenRefresh: action.payload,
          }
        }
      } as UserState);
    },
    setFromTokenResponse: (state, action: PayloadAction<TokenResponse>) => {
      return updateObject(state, {
        currentUser: {
          profiles: action.payload.profiles,
          account: {
            preferredLanguage: action.payload.preferredLanguage,
          }
        },
        selectedProfileId: action.payload.selectedProfileId,
      } as UserState);
    },
    setPreferredLanguage: (state, action: PayloadAction<string>) => {
      i18n.changeLanguage(action.payload);
      return updateObject(state, {
        currentUser: {
          account: {
            preferredLanguage: action.payload,
          }
        }
      } as UserState);
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice;
