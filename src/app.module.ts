import { Module } from '@nestjs/common';
import { ChatController } from './app.controller';

@Module({
  imports: [],
  controllers: [ChatController],
})
export class AppModule {}
