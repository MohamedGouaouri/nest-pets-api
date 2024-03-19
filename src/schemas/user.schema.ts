import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Pet } from './pet.schema';

@Schema()
export class User {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    type: String,
    required: false,
  })
  age: string;

  @Prop({
    type: String,
    required: false,
  })
  sex: string;

  @Prop({
    type: [mongoose.Types.ObjectId],
    default: [],
    ref: 'Pet',
  })
  pets: Pet[];
}

export const UserSchema = SchemaFactory.createForClass(User);
