import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'src/typeorm/entities/user';

@Module({
  imports: [TypeOrmModule.forFeature([users])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
