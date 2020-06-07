import authApiInstance from './instances/auth-api-instance';
import { PasswordResetInfos } from '../types/user-management-api';
import { ServiceStatus } from '../types/general';
import { User, Profile, ContactPreferences, ContactInfo } from '../types/user';
import apiInstance from './instances/api-instance';

// Password Reset API
export const initiatePasswordResetReq = (instanceID: string, accountID: string) => apiInstance.post<ServiceStatus>('/v1/user/password-reset/initiate', { instanceID, accountID });
export const getInfosForPasswordResetReq = (token: string) => authApiInstance.post<PasswordResetInfos>('/v1/user/password-reset/get-infos', { token });
export const resetPasswordReq = (token: string, newPassword: string) => authApiInstance.post<ServiceStatus>('/v1/user/password-reset/reset-with', { token, newPassword });

// User management API
export const getUserReq = () => authApiInstance.get<User>('/v1/user');
export const changePasswordReq = (oldPassword: string, newPassword: string) => authApiInstance.post<ServiceStatus>('/v1/user/change-password', { oldPassword, newPassword });
export const changeAccountEmailReq = (newEmail: string, keepOldEmail: boolean) => authApiInstance.post<User>('/v1/user/change-account-email', { newEmail, keepOldEmail });
export const setPreferredLanguageReq = (languageCode: string) => authApiInstance.post<User>('/v1/user/set-language', { languageCode });
// Profiles:
export const saveProfileReq = (profile: Profile) => authApiInstance.post<User>('/v1/user/profile/save', { profile });
export const removeProfileReq = (profileId: string) => authApiInstance.post<User>('/v1/user/profile/remove', { profile: { id: profileId } });
// Contact settings:
export const resendVerificationEmailReq = (address: string) => authApiInstance.post<ServiceStatus>('/v1/user/resend-verification-message', { type: 'email', address: address });
export const verifyContactReq = (token: string) => apiInstance.post<User>('/v1/user/contact-verification', { token });
export const unsubscribeNewsletterReq = (token: string) => apiInstance.get<ServiceStatus>('/v1/user/unsubscribe-newsletter', { params: { token } });
export const updateContactPreferencesReq = (contactPrefs: ContactPreferences) => authApiInstance.post<User>('/v1/user/contact-preferences', { contactPreferences: contactPrefs });
export const addEmailReq = (contactInfo: ContactInfo) => authApiInstance.post<User>('/v1/user/contact/add-email', { contactInfo });
export const removeEmailReq = (contactInfoID: string) => authApiInstance.post<User>('/v1/user/contact/remove-email', { contactInfo: { id: contactInfoID } });
export const revokeAllRefreshTokensReq = () => authApiInstance.post<ServiceStatus>('/v1/user/revoke-refresh-tokens', {});
export const deleteAccountReq = (userId: string) => authApiInstance.post<ServiceStatus>('/v1/user/delete', { userId });
