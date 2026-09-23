import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';
import { BandsService } from './bands.service.js';

@WebSocketGateway()
export class BandsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly bandsService: BandsService) {}

  @SubscribeMessage('add-band')
  handleMessage(@MessageBody() name: string) {
    const bands = this.bandsService.addBand(name);
    this.server.emit('bands-update', bands);
  }

  @SubscribeMessage('get-bands')
  handleGetBands() {
    this.server.emit('bands-update', this.bandsService.getBands());
  }

  @SubscribeMessage('remove-band')
  handleRemoveBand(@MessageBody() id: string) {
    this.bandsService.removeBand(id);
    this.server.emit('bands-update', this.bandsService.getBands());
  }

  @SubscribeMessage('increase-votes')
  handleIncreaseVotes(@MessageBody() id: string) {
    this.bandsService.increaseVotes(id);
    this.server.emit('bands-update', this.bandsService.getBands());
  }

  @SubscribeMessage('change-name')
  handleChangeName(
    @MessageBody() { id, newName }: { id: string; newName: string },
  ) {
    this.bandsService.changeName(id, newName);
    this.server.emit('bands-update', this.bandsService.getBands());
  }
}
