import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getEnvironment(): string {
    return this.configService.getOrThrow<string>('app.environment');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
