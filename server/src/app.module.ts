import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TextEventsModule } from './textEvents/textEvents.module';
import { RoomModule } from './room/room.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, TextEventsModule, RoomModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
