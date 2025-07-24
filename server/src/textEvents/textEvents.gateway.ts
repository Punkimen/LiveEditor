import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:5173',
  },
})
export class TextEvents {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('listenText')
  handleEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    console.log('client', client);
    console.log('data', data);
    this.server.emit('listenText', data);
  }
}
