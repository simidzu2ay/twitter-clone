import helmet from '@fastify/helmet';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const config = app.get(ConfigService);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.register(helmet);

  await app.listen(config.get('PORT')!, '0.0.0.0');
}
bootstrap();
