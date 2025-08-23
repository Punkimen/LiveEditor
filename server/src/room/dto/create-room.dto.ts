import { IsInt } from 'class-validator';

export class createRoomDto {
  @IsInt()
  userId: number;
}
