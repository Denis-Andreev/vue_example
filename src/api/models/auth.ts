export interface ApiRegisterPayload {
  email: string;
  password: string;
  name: string;
  age: number;
}

export interface ApiLoginPayload {
  email: string;
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

export interface TokenInfo {
  email: string;
  userId: string;
  iat: number;
  exp: number
}