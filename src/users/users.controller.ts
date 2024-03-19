import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from './users';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('/:userId')
  getUserById(@Param('userId') userId: string) {
    const user = this.usersService.getUserById(parseInt(userId));
    if (!user) {
      //
      //   throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Post('/create')
  createUser(@Body() user) {
    return this.usersService.createUser(user);
  }

  @Post('/:userId/own/:petId')
  ownPet(@Param('userId') userId: string, @Param('petId') petId: string) {
    return this.usersService.ownPet(parseInt(userId), parseInt(petId));
  }
}
