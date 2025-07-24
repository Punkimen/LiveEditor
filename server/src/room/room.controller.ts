import { Controller, Get, Post } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post('create')
  createRoom() {
    return this.roomService.create();
  }

  @Get()
  getAll() {
    return this.roomService.getAll();
  }
}
