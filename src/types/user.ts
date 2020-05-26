export interface User {
  id: string;
  account: {
    type: string;
    accountId: string;
    accountConfirmedAt: number;
    preferredLanguage: string;
  };
  roles: string[];
  timestamps: {
    createdAt: number;
    updatedAt: number;
    lastLogin: number;
    lastTokenRefresh: number;
  };
  profiles: Profile[];
  contactPreferences: ContactPreferences;
  contactInfos: ContactInfo[];
}

export interface Profile {
  id: string;
  alias: string;
  consentConfirmedAt: number;
  avatarId: string;
  createdAt: number;
}

export interface ContactPreferences {
  subscribedToNewsletter: boolean;
  sendNewsletterTo: string[];
}

interface ContactInfoBase {
  id: string;
  type: string;
  confirmedAt: number;
}

export interface EmailContactInfo extends ContactInfoBase {
  email: string;
}

export interface PhoneContactInfo extends ContactInfoBase {
  phone: string;
}

export type ContactInfo = EmailContactInfo | PhoneContactInfo;
