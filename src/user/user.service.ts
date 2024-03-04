import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dtos';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {

    private users: User[] = []

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const saltDrRounds = 10;

        const passwordHashed = await hash(createUserDto.password, saltDrRounds)

        const user = {
            ...createUserDto,
            id: this.users.length + 1,
            password: passwordHashed
        }

        this.users.push(user)

        return user
    }

    async getAllUsers(): Promise<User[]> {
        return this.users
    }

}
