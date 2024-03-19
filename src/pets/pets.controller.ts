import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { PetsService } from './pets';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get('/')
  async getAllPets(@Query('name') petName: string) {
    console.log(petName);
    return await this.petsService.getAllPets();
  }

  @Get('/:petId')
  async getPetById(@Param('petId') petId: string) {
    const pet = await this.petsService.getPetById(petId);
    if (!pet) {
      throw new NotFoundException('Pet not found');
    }
    return pet;
  }

  @Post('/create')
  async createPet(@Body() pet) {
    return await this.petsService.createPet(pet);
  }
}
