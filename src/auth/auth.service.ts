import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
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