import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async register(authDto: AuthDto) {
    //generate password to hashedpassword
    const hashedPassword = await argon.hash(authDto.password);
    //insert data to database
    const user = await this.prismaService.user.create({
      data: {
        email: authDto.email,
        hashedPassword: hashedPassword,
        firstName: '',
        lastName: '',
      },
    });
    return user;
  }
  login() {
    return {
      message: ' this is login',
    };
  }
}
