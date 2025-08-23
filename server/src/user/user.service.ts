import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/auth/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(authBody: AuthDto) {
    const { email, password } = authBody;
    return await this.prismaService.user.create({
      data: {
        avatar: '',
        email,
        password,
        name: '',
      },
    });
  }
}
