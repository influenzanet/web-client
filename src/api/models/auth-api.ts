
export interface UserCredentials {
  email: string;
  password: string;
  instanceId: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

