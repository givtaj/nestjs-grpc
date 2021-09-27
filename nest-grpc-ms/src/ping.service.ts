import { Injectable } from '@nestjs/common';
import { Echo, EchoResponse } from './types';

@Injectable()
export class PingService {
  public processEcho(data: Echo): EchoResponse {
    if (data.echo === 'ping') {
      return { response: 'pong' };
    }
    return { response: data.echo };
  }
}
