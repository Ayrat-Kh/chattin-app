import { DEFAULT_WSS_PORT } from '@backend/config/constants';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { CreateRoom, Events } from '@shared/types/room';
import { Socket } from 'socket.io';
import { v4 as uuid } from 'uuid';

@WebSocketGateway(DEFAULT_WSS_PORT, { cors: true })
export class RoomGateway implements OnGatewayInit {
  afterInit() {}

  @SubscribeMessage(Events.ROOM_CREATE)
  async createRoom(
    @MessageBody() data: CreateRoom,
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    console.log('create room');
    const roomId = uuid();
    await client.join(roomId);
    client.emit(Events.ROOM_CREATED, {
      ...data,
      roomId,
    });
  }
}
