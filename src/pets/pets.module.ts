import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PetsService } from './pets';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from 'src/schemas/pet.schema';

@Module({
  controllers: [PetsController],
  providers: [PetsService],
  exports: [PetsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Pet.name,
        schema: PetSchema,
      },
    ]),
  ],
})
export class PetsModule {}
