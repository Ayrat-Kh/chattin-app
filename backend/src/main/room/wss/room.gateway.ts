import { DEFAULT_WSS_PORT } from '@backend/config/constants';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import {
  ClientJoin,
  ClientJoinedResponse,
  ClientLeftResponse,
  CreateRoom,
  CreateRoomResponse,
  Events,
} from '@shared/types/room';
import { Socket } from 'socket.io';
import { v4 as uuid } from 'uuid';
import { RoomService } from '../services/room.service';

@WebSocketGateway(DEFAULT_WSS_PORT, { cors: true })
export class RoomGateway implements OnGatewayDisconnect {
  constructor(private readonly roomService: RoomService) {}

  handleDisconnect(client: Socket) {
    const room = this.roomService.getRoomByClientId(client.id);

    if (!room) {
      return;
    }

    const leftParticipant = this.roomService.removeClient(client.id);
    client
      .to(room.id)
      .emit(Events.CLIENT_LEFT, {
        clientId: client.id,
        participants: room.participants,
        roomId: room.id,
        identity: leftParticipant?.identity,
      } as ClientLeftResponse);
    client.leave(room.id);
  }

  @SubscribeMessage(Events.ROOM_CREATE)
  async handleRoomCreating(
    @MessageBody() data: CreateRoom,
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    const roomId = uuid();
    await client.join(roomId);
    this.roomService.createRoom(
      {
        clientId: client.id,
        identity: data.identity,
      },
      roomId,
    );
    client.emit(Events.ROOM_CREATED, {
      ...data,
      roomId,
    } as CreateRoomResponse);
  }

  @SubscribeMessage(Events.CLIENT_JOIN)
  async handleClientJoining(
    @MessageBody() data: ClientJoin,
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    const room = this.roomService.getRoom(data.roomId);
    if (!room) {
      return;
    }

    room.participants.push({
      identity: data.identity,
      clientId: client.id,
    });

    await client.join(data.roomId);

    client.to(data.roomId).emit(Events.CLIENT_JOINED, {
      participants: room.participants,
      clientId: client.id,
      ...data,
    } as ClientJoinedResponse);

    client.emit(Events.CLIENT_JOINED, {
      participants: room.participants,
      clientId: client.id,
      ...data,
    } as ClientJoinedResponse);
  }
}
