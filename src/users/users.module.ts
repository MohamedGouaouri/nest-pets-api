import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users';
import { PetsModule } from 'src/pets/pets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    PetsModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
})
export class UsersModule {}
