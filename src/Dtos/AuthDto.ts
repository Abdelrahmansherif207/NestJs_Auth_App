import { IsEmail, Length, Matches, IsString, IsInt } from 'class-validator';

export class BaseAuthDto {
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @IsString()
  @Length(8, 32, { message: 'Password must be between 8 and 32 characters' })
  password: string;
}

export class SignUpDto extends BaseAuthDto {
  @IsString()
  full_name: string;

  @IsInt()
  age: number;

  @IsString()
  phoneNumber: string;
}

export class SignInDto extends BaseAuthDto {}
