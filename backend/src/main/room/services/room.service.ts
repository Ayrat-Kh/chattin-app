import { ApplicationException } from '@backend/common/exceptions/ApplicationException';
import { Injectable } from '@nestjs/common';
import { Participant, Room } from '@shared/types/room';

@Injectable()
export class RoomService {
  private rooms: Room[] = [];

  getRoom(roomId: string): Room | undefined {
    return this.rooms.find(room => room.id === roomId);
  }

  getRoomByClientId(clientId: string): Room | undefined {
    return this.rooms.find(room => room.id === roomId);
  }

  addParticipantToRoom(participant: Participant, roomId: string): void {
    const room = this.getRoom(roomId);
    if (!room) {
      throw new ApplicationException(`Room ${roomId} not found`);
    }
    room.participants.push(participant);
  }
}
