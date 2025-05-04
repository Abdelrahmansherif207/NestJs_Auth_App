/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUpDto, SignInDto } from 'src/Dtos/AuthDto';
import { User } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {}

  async signUp(dto: SignUpDto) {
    const { email, full_name, password, age, phoneNumber } = dto;

    let user = await this.userModel.findOne({
      $or: [{ email }, { full_name }],
    });

    if (user) {
      throw new ConflictException('Email/FullName is already registered! ❌');
    }

    const hashedPwd: string = await bcrypt.hash(password, 10);

    user = await this.userModel.create({
      email,
      password: hashedPwd,
      full_name,
      age,
      phoneNumber,
    });

    const { password: _password, ...responseData } = user.toJSON();
    return {
      message: 'Your account has been created! 🎉🎉',
      data: responseData,
    };
  }

  async signIn(dto: SignInDto) {
    const { email, password } = dto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Credentials are incorrect ❌');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Credentials are incorrect ❌');
    }

    const { full_name, _id } = user.toJSON();
    const payload = { full_name, userId: _id };

    // Create JWT token
    const token = jwt.sign(
      payload,
      this.configService.get<string>('JWT_SECRET'),
      {
        expiresIn: '1h',
      },
    );

    return {
      message: 'Login successful! 🎉',
      token,
    };
  }
}
