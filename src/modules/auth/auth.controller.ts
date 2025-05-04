import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from 'src/Dtos/AuthDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/sign-up')
  signUp(@Body() dto: SignUpDto) {
    return this.service.signUp(dto);
  }

  @Post('/sign-in')
  signIn(@Body() dto: SignInDto) {
    return this.service.signIn(dto);
  }
}
