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
        preferredLanguage: '',
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
    initializeLanguage: (state, action: PayloadAction<string>) => {
      if (state.currentUser.account.preferredLanguage === '') {
        return updateObject(state, { currentUser: { account: { preferredLanguage: action.payload } } } as UserState);
      } else {
        i18n.changeLanguage(state.currentUser.account.preferredLanguage);
        return state;
      }
    },
    setState: (state, action: PayloadAction<UserState>) => {
      return updateObject(state, action.payload);
    },
    setOnNewToken: (state, action: PayloadAction<{ tokenResponse: TokenResponse, timestamp: number }>) => {
      return updateObject(state, {
        currentUser: {
          profiles: action.payload.tokenResponse.profiles,
          account: {
            preferredLanguage: action.payload.tokenResponse.preferredLanguage,
          },
          timestamps: {
            lastTokenRefresh: action.payload.timestamp,
          }
        },
        selectedProfileId: action.payload.tokenResponse.selectedProfileId,
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
