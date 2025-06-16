import { Module } from '@nestjs/common';
import { TextEvents } from './textEvents.gateway';

@Module({
  providers: [TextEvents],
})
export class TextEventsModule {}
