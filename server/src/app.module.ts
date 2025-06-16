import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TextEventsModule } from './textEvents/textEvents.module';

@Module({
  imports: [AuthModule, TextEventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
