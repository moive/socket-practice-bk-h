import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { appConfig, configValidationSchema } from './config/index.js';
import { LoggerModule } from './common/logger/logger.module.js';
import { ChatModule } from './chat/chat.module.js';
import { BandsModule } from './bands/bands.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      validationSchema: configValidationSchema,
    }),
    LoggerModule,
    ChatModule,
    BandsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
