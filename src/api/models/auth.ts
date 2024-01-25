export interface ApiAuthPayload {
  login: string;
  password: string;
}
export interface ApiAuthResponse {
  token: string;
  refresh: string;
  expired: number // timestamp
}

export interface ApiLogoutPayload {
  token: string;
}