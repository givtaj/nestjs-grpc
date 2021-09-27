import { Observable } from 'rxjs';

export interface IGrpcService {
  processEcho(echo: Echo): Observable<any>;
}

export interface Echo {
  echo: string;
}
