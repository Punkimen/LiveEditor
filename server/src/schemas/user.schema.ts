import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDoc = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  passwordHash: string;
  @Prop()
  role: string;
  @Prop()
  refreshToken?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
