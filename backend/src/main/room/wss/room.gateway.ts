import { DEFAULT_WSS_PORT } from "@backend/config/constants";
import { ConnectedSocket, MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { WssTypes } from '@shared/types/wss';
import { Socket } from 'socket.io';
import { v4 as uuid } from 'uuid';


@WebSocketGateway(DEFAULT_WSS_PORT, { namespace: 'room' })
export class RoomGateway implements OnGatewayInit {
  afterInit(server: any) {
    
  }

  @SubscribeMessage(WssTypes.CREATE_ROOM)
  async createRoom(@MessageBody() data: { identity: string }, @ConnectedSocket() client: Socket): Promise<{ identity: string, roomId: string }> {
    const roomId = uuid()
    await client.join(roomId)
    return {
      ...data,
      roomId
    }
  }
}