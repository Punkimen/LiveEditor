import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async create() {
    const created = await this.prisma.room.create({
      data: {
        content: '123',
      },
    });
    console.log('created', created);
    return created;
  }

  async getAll() {
    const rooms = await this.prisma.room.findMany();
    console.log({ rooms });
    return rooms;
  }
}
