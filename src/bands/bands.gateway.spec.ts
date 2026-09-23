import { Test, TestingModule } from '@nestjs/testing';
import { BandsGateway } from './bands.gateway.js';

describe('BandsGateway', () => {
  let gateway: BandsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandsGateway],
    }).compile();

    gateway = module.get<BandsGateway>(BandsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
