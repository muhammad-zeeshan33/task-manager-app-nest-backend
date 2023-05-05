import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { jwtService } from 'src/auth/jwtService/jwt.service';
import { keys } from 'src/config/key';
@Module({
  imports: [
    JwtModule.register({
      secret: keys.jwtSecret,
      signOptions: { expiresIn: keys.expiresIn },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService, jwtService],
})
export class AuthModule {}
