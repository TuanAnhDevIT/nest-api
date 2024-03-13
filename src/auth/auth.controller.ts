import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body('email') email: string, @Body('pass') password: string) {
    console.log(`email = ${email}, password = ${password}`);
    console.log(`type of email is: ${typeof email}`);
    return this.authService.register();
  }

  //   @Post('login')
  //   login() {
  //     return this.authService.login();
  //   }
}
