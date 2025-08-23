import { IsInt, IsString } from 'class-validator';

enum Role {
  ADMIN,
  USER,
  READONLY,
}

export class UserDto {
  @IsString()
  name?: string;

  @IsString()
  email?: string;

  @IsString()
  password?: string;

  @IsString()
  avatar?: string;
}

export class Membership {
  @IsInt()
  userId: number;
  @IsString()
  roomId: string;
  @IsString()
  role: Role;
}
