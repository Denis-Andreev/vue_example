export interface ApiRegisterPayload {
  login: string;
  password: string;
}

export interface ApiLoginPayload {
  login: string;
  password: string;
}

export interface ApiLoginResponse {
  token: string;
  // refresh: string;
  // expired: number // timestamp
}

export interface ApiLogoutPayload {
  token: string;
}