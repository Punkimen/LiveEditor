import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TextEventsModule } from './textEvents/textEvents.module';
import { RoomModule } from './room/room.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, TextEventsModule, RoomModule, PrismaModule, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
