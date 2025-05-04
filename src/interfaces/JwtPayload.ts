export interface JwtPayload {
  userId: string;
  full_name: string;
  age?: number;
  phoneNumber?: string;
}
