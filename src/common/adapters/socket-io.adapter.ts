import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';

export class SocketIoAdapter extends IoAdapter {
  constructor(
    app: INestApplication,
    private readonly configService: ConfigService,
  ) {
    super(app);
  }

  createIOServer(port: number, options?: ServerOptions) {
    const corsOrigins =
      this.configService.getOrThrow<string[]>('app.corsOrigins');

    return super.createIOServer(port, {
      ...options,
      path: options?.path ?? '/socket.io',
      cors: {
        origin: corsOrigins,
      },
    } as ServerOptions);
  }
}
