import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from './dtos/createUser.dtos';
import { UserService } from './user.service';
import { get } from 'http';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {

    }

    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUser);
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers()
    }
}
