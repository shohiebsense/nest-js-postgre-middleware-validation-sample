import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body(ValidationPipe) user: User): Promise<User> {
        return this.userService.create(user)
    }

    @Get()
    async findAll() {
        return this.userService.findAll()
    }
}
