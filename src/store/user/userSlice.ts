import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, ContactPreferences } from '../../types/user';
import { TokenResponse } from '../../types/auth-api';
import { updateObject } from '../utils';

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
        return state;
      }
    },
    setState: (state, action: PayloadAction<UserState>) => {
      return updateObject(state, action.payload);
    },
    setCurrentUser: (state, action: PayloadAction<User>) => {
      return updateObject(state, { currentUser: action.payload } as UserState);
    },
    setFromTokenResponse: (state, action: PayloadAction<TokenResponse>) => {
      return updateObject(state, {
        currentUser: {
          profiles: action.payload.profiles,
          account: {
            preferredLanguage: action.payload.preferredLanguage,
          },
        },
        selectedProfileId: action.payload.selectedProfileId,
      } as UserState);
    },
    setPreferredLanguage: (state, action: PayloadAction<string>) => {
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
