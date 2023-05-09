import { Controller, Get, Post, Delete, Patch, Body,Response, Put, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service'
import { userDto } from '../../dtos/user.dto'

@Controller('users')
export class UsersController {
    constructor( private readonly _userService: UsersService ){}

    @Get()
     async getUsers(){
        const users = await this._userService.fetchUsers();
        return users;
    }

    @Post()
    createUsers(@Body() userdto : userDto){
        // const { ... userDetails } = userDto
        this._userService.createUser(userdto);    
    }

    @Get(':id')
    searchUser(@Param('id') id){
        return this._userService.findById(id);
    }

    @Delete('/:userid')
    deleteUser(@Param('userid', ParseIntPipe) userid: number)
    {
        return this._userService.deleteUser(userid);

    }

    @Patch(':id')
    editUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: userDto
        ){
            return this._userService.updateUser(id , updateUserDto)
        }
}
