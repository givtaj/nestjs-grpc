import { Controller, Logger, Post, Body, OnModuleInit } from '@nestjs/common';
import { Echo, IGrpcService } from './grpc.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('AppController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Post('ping')
  async processEcho(@Body('echo') echo: string) {
    console.log(echo);
    this.logger.log('pinging...');
    return this.grpcService.processEcho({ echo });
  }
}
