import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async create(user: User): Promise<User> {
        const existingUser = await this.userRepository.findOne({ where: [{ name: user.name }, { email: user.email }] });
        if (existingUser) {
            throw new ConflictException('User with that name or email already exists');
        }
        const newUser = this.userRepository.create(user); // Create a new user instance
        return this.userRepository.save(newUser); 
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
    
}
