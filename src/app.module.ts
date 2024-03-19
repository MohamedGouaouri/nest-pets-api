import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PetsModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/dev'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
