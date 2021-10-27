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
  CreateRoom,
  CreateRoomResponse,
  Events,
  Room,
} from '@shared/types/room';
import { Socket } from 'socket.io';
import { v4 as uuid } from 'uuid';

@WebSocketGateway(DEFAULT_WSS_PORT, { cors: true })
export class RoomGateway implements OnGatewayDisconnect {
  private rooms: Room[] = [];

  handleDisconnect(client: Socket) {
    const room = this.rooms.find(room =>
      room.participants?.find(
        participant => participant.clientId === client.id,
      ),
    );

    if (!room) {
      return;
    }
    room.participants = room.participants.filter(
      participant => participant.clientId === client.id,
    );
    this.rooms = [...this.rooms.filter(room => room.id !== room.id), room];
    client.to(room.id).emit(Events.CLIENT_LEFT, { clientId: client.id });
    client.leave(room.id);
  }

  @SubscribeMessage(Events.ROOM_CREATE)
  async handleRoomCreating(
    @MessageBody() data: CreateRoom,
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    const roomId = uuid();
    await client.join(roomId);
    this.rooms.push({
      id: roomId,
      participants: [
        {
          clientId: client.id,
          identity: data.identity,
        },
      ],
    });
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
    const room = this.getRoom(data.roomId);
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

  getRoom(roomId: string): Room | undefined {
    return this.rooms.find(room => room.id === roomId);
  }
}
