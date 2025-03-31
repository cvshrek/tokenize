export interface IAuthenticationRequest {
  email: string;
  password: string;
  captcha: string;
}

export interface IAuthenticationResponse {
  accessToken: string;
  refreshToken: string;
  enableTfa: 0 | 1;
  needVerified: 0 | 1;
  user: User;
}
