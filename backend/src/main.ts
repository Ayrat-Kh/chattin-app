import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { DEFAULT_PORT } from './config/constants';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(DEFAULT_PORT, '0.0.0.0');
}
bootstrap();
