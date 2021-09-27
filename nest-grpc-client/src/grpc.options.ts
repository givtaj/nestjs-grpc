import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    // need to add url for docker compose
    url: 'msserver:9090',
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};
