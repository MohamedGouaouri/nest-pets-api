import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet } from 'src/schemas/pet.schema';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private readonly petModel: Model<Pet>) {}

  async getAllPets() {
    return await this.petModel.find({}).select(['-__v']);
  }

  async getPetById(petId: string) {
    try {
      const pet = await this.petModel.findById(petId);
      return pet;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Wrong id was passed');
    }
  }

  async createPet(pet) {
    try {
      return await this.petModel.create(pet);
    } catch (error) {
      throw new InternalServerErrorException('Something bad happened');
    }
  }
  updatePet(petId: number, pet: Pet) {}
}
