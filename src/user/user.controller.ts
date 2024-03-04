import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from './dtos/createUser.dtos';
import { UserService } from './user.service';
import { get } from 'http';
import { UserEntity } from './interfaces/user.entity';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {

    }

    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
        return this.userService.createUser(createUser);
    }

    @Get()
    async getAllUsers(): Promise<UserEntity[]> {
        return this.userService.getAllUsers()
    }
}
