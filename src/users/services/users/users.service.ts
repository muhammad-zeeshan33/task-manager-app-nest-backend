import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from 'src1/typeorm/entities/user';
import { userDto } from 'src1/users/dtos/user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(users) private userRepository: Repository<users>){}

    fetchUsers(){
        return this.userRepository.find();
    }
    createUser(userDetails: users){
        const newUser = this.userRepository.create(userDetails);
        return this.userRepository.save(newUser)
    }
   async deleteUser(id:number){
    return this.userRepository.delete(id);
    }
    async updateUser(id:number, updateUserDto: userDto){
    const updatedUser = await this.userRepository.update(id, updateUserDto);
    return updatedUser;     
    }
    
    findById(id:any){
        return this.userRepository.find({where :{userid: id}});

    }
}
