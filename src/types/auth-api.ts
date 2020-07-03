import { Profile, User } from "./user";

export interface SignupMsg {
  email: string;
  password: string;
  instanceId: string;
  preferredLanguage: string;
  wantsNewsletter: boolean;
  use2fa: boolean;
}

export interface LoginMsg {
  email: string;
  password: string;
  instanceId: string;
  verificationCode?: string;
}

export interface LoginResponse {
  token: TokenResponse;
  user: User;
  secondFactorNeeded: boolean;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  profiles: Profile[];
  selectedProfileId: string;
  preferredLanguage: string;
}

