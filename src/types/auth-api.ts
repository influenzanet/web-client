import { Profile } from "./user";

export interface SignupMsg {
  email: string;
  password: string;
  instanceId: string;
  preferredLanguage: string;
  wantsNewsletter: boolean;
}

export interface LoginMsg {
  email: string;
  password: string;
  instanceId: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  profiles: Profile[];
  selectedProfileId: string;
  preferredLanguage: string;
}

