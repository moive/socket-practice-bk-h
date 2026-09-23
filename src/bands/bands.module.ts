import { Module } from '@nestjs/common';
import { BandsGateway } from './bands.gateway.js';
import { BandsService } from './bands.service.js';

@Module({
  providers: [BandsGateway, BandsService]
})
export class BandsModule {}
