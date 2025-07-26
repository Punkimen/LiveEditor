import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RoomService } from './room.service';
import { UpdateRoomDto } from './dto/update-room.dto';

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

  @Get(':id')
  getRoom(@Param('id') id: string) {
    return this.roomService.getRoom(id);
  }

  @Patch()
  pathRoom(@Body() updateRoomDto: UpdateRoomDto) {
    const { content, id } = updateRoomDto;
    return this.roomService.updateRoom(id, content);
  }
}
