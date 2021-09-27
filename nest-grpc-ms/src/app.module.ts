import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PingService } from './ping.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PingService],
})
export class AppModule {}
