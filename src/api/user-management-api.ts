import api from './api';
import { PasswordResetInfos } from '../types/user-management-api';
import { ServiceStatus } from '../types/general';
import { User, Profile, ContactPreferences, ContactInfo } from '../types/user';

// Password Reset API
export const initiatePasswordResetReq = (instanceID: string, accountID: string) => api.post<ServiceStatus>('/v1/user/password-reset/initiate', { instanceID, accountID });
export const getInfosForPasswordResetReq = (token: string) => api.post<PasswordResetInfos>('/v1/user/password-reset/get-infos', { token });
export const resetPasswordReq = (token: string, newPassword: string) => api.post<ServiceStatus>('/v1/user/password-reset/reset-with', { token, newPassword });

// User management API
export const getUserReq = () => api.get<User>('/v1/user');
export const changePasswordReq = (oldPassword: string, newPassword: string) => api.post<ServiceStatus>('/v1/user/change-password', { oldPassword, newPassword });
export const changeAccountEmailReq = (newEmail: string, keepOldEmail: boolean) => api.post<User>('/v1/user/change-account-email', { newEmail, keepOldEmail });
export const setPreferredLanguageReq = (languageCode: string) => api.post<User>('/v1/user/set-language', { languageCode });
// Profiles:
export const saveProfileReq = (profile: Profile) => api.post<User>('/v1/user/profile/save', { profile });
export const removeProfileReq = (profileId: string) => api.post<User>('/v1/user/profile/remove', { profile: { id: profileId } });
// Contact settings:
export const updateContactPreferencesReq = (contactPrefs: ContactPreferences) => api.post<User>('/v1/user/contact-preferences', { contactPreferences: contactPrefs });
export const addEmailReq = (contactInfo: ContactInfo) => api.post<User>('/v1/user/contact/add-email', { contactInfo });
export const removeEmailReq = (contactInfoID: string) => api.post<User>('/v1/user/contact/remove-email', { contactInfo: { id: contactInfoID } });
export const revokeAllRefreshTokensReq = () => api.post<ServiceStatus>('/v1/user/revoke-refresh-tokens', {});
export const deleteAccountReq = (userId: string) => api.post<ServiceStatus>('/v1/user/delete', { userId });
