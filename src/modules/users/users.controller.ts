import { Controller, Get } from '@nestjs/common';
import { GetUser } from 'src/Decorators/get_user';
import { JwtPayload } from 'src/interfaces/JwtPayload';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('/')
  getAllUsers(@GetUser() user: JwtPayload) {
    return this.service.getAllUsers(user);
  }

  @Get('/profile')
  getProfile(@GetUser() user: JwtPayload) {
    return this.service.getProfile(user);
  }
}
