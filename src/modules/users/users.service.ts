import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtPayload } from 'src/interfaces/JwtPayload';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  getAllUsers(user: JwtPayload) {
    console.log(user);
    return this.userModel
      .find({ _id: { $ne: user.userId } })
      .select('full_name email age phoneNumber')
      .exec();
  }

  async getProfile(user: JwtPayload) {
    return this.userModel
      .findOne({ full_name: user.full_name })
      .select('full_name email age phoneNumber');
  }
}
