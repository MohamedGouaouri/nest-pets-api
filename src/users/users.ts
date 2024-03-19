import {
  Injectable,
} from '@nestjs/common';
import { PetsService } from 'src/pets/pets';

@Injectable()
export class UsersService {
  constructor(private readonly petsService: PetsService) {}

  getAllUsers() {}

  getUserById(userId: number) {
    // Search for userId inside users array
    return null;
  }

  createUser(user) {
    // Increment user id
  }

  ownPet(userId: number, petId: number) {
    // Search for user
    // if the user is not found, throw not found error
    // Search for the pet
    // if the pet is not found, throw not found error
    // We check if the pet does not have an owner,
    //  if yes throw a bad request error
    // make the user an owner of that pet
  }
}
