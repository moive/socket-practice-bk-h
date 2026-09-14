import {
  OnGatewayConnection,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class MainGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    // console.log(`Client connected: ${client.id}`);
    client.emit('welcome', {
      message: 'Welcome to the chat!',
      date: new Date(),
    });

    client.on('message-client', (data) => {
      console.log(data);
    });
  }
}
