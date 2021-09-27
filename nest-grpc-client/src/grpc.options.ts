import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

const grpcServerAddress =
  process.env.NODE_ENV === 'test' ? '0.0.0.0' : 'msserver';

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    // need to add url for docker compose
    url: `${grpcServerAddress}:9090`,
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};
