export interface APIState {
  loggedIn: boolean;
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}
