import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async create() {
    const created = await this.prisma.room.create({
      data: {
        content: '',
      },
    });
    return created;
  }

  async getAll() {
    try {
      const rooms = await this.prisma.room.findMany();
      return rooms;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'This is error',
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  async getRoom(id: string) {
    const room = await this.prisma.room.findUnique({
      where: {
        id,
      },
    });

    return room;
  }

  async updateRoom(id: string, content: string) {
    console.log({ id });
    console.log({ content });

    const room = await this.prisma.room.findFirst({
      where: {
        id: id,
      },
    });
    console.log({ room });
    if (!room) {
      return;
    }
    await this.prisma.room.update({
      data: {
        content,
      },
      where: {
        id,
      },
    });
  }
}
