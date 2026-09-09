import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MainGateway } from './main/main.gateway.js';
import { ConfigModule } from '@nestjs/config';
import { appConfig, configValidationSchema } from './config/index.js';
import { LoggerModule } from './common/logger/logger.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      validationSchema: configValidationSchema,
    }),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService, MainGateway],
})
export class AppModule {}
