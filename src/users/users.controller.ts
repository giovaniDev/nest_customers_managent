import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('user')
export class UsersController {

    constructor(private userRepository: UsersService) {}
    
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        this.userRepository.createUser
        return {ok: 'ok'}
    }
}
