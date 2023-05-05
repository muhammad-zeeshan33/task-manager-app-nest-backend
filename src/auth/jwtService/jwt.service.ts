import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class jwtService {
  constructor(private readonly jwtService: JwtService) {}

  async generateJWT(user: any) {
    return await this.jwtService.signAsync({ user });
  }

  async verifyJWT(token: string) {
    return await this.jwtService.verifyAsync(token);
  }
}
