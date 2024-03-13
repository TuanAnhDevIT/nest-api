import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  register() {
    return {
      message: ' Register user',
    };
  }
  login() {
    return {
      message: ' this is login',
    };
  }
}
