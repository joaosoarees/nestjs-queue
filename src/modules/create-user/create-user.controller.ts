import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('create-user')
export class CreateUserController {
  @Post('/')
  createUser(@Body() createUser: CreateUserDto) {
    return createUser;
  }
}
