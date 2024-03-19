import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';

@Schema()
export class Pet {
  @Prop({
    required: true,
    type: String,
  })
  name: string;

  @Prop({
    required: true,
    type: String,
  })
  type: string;

  @Prop({
    type: mongoose.Types.ObjectId,
    ref: User.name, // "User"
  })
  owner: User;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
