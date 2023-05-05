import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any): Promise<any> {
    return await this.authService.login(body.email, body.password);
  }

  @Post('register')
  async register(@Body() body: any): Promise<any> {
    return await this.authService.addUser(
      body.name,
      body.email,
      body.password,
      body.isAdmin,
    );
  }
}
