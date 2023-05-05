import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { jwtService } from 'src/auth/jwtService/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: jwtService,
  ) {}

  async login(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return { message: 'User not found' };
    }
    if (user.password !== password) {
      return { message: 'Password not match' };
    }
    const token = await this.jwtService.generateJWT(user);
    return { ...user, token };
  }

  async addUser(
    name: string,
    email: string,
    password: string,
    isAdmin: boolean,
  ): Promise<any> {
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    if (user) {
      return { message: 'User already exists' };
    }
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;
    newUser.isAdmin = isAdmin;
    const result = await this.userRepository.save(newUser);
    return result;
  }
}
