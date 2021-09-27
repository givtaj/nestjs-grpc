import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('check communication btw ms client and server', async () => {
    try {
      const res = await request(app.getHttpServer())
        .post('/ping')
        .send({ echo: 'ping' })
        .expect(201);

      // console.log('body::: ', res.body);
      expect(res.body.response).toEqual('pong');
    } catch (ex) {
      console.error(ex);
    }
  });
});
