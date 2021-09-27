import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PingService } from './ping.service';
import { Echo, EchoResponse } from './types';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private pingService: PingService) {}

  @GrpcMethod('AppController', 'ProcessEcho')
  processEcho(data: Echo): EchoResponse {
    this.logger.log(`echo: ${data.echo}`);
    return this.pingService.processEcho(data);
  }
}
