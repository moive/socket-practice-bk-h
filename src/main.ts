import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from './common/index.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = app.get(LoggerService);
  const port = configService.getOrThrow<number>('app.port');
  await app.listen(port);
  logger.log(
    `Application is running on: ${await app.getUrl()} 👍`,
    'Bootstrap',
  );
}
await bootstrap();
