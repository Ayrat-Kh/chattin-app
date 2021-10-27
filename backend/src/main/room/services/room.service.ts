import { ApplicationException } from '@backend/common/exceptions/ApplicationException';
import { Injectable, Scope } from '@nestjs/common';
import { Participant, Room } from '@shared/types/room';

@Injectable({ scope: Scope.DEFAULT })
export class RoomService {
  private rooms: Room[] = [];

  getRoom(roomId: string): Room | undefined {
    return this.rooms.find(room => room.id === roomId);
  }

  getRoomByClientId(clientId: string): Room | undefined {
    return this.rooms.find(room =>
      room.participants?.find(participant => participant.clientId === clientId),
    );
  }

  addParticipantToRoom(participant: Participant, roomId: string): void {
    const room = this.getRoom(roomId);
    if (!room) {
      throw new ApplicationException(`Room ${roomId} not found`);
    }
    room.participants.push(participant);
  }

  createRoom(participant: Participant, roomId: string): void {
    this.rooms.push({
      id: roomId,
      participants: [participant],
    });
  }

  removeClient(clientId: string): Participant | undefined {
    const room = this.getRoomByClientId(clientId);

    if (!room) return;

    const participant = room.participants.find(
      participant => participant.clientId === clientId,
    );

    room.participants = room.participants.filter(
      participant => participant !== participant,
    );

    this.rooms = [...this.rooms.filter(room => room.id !== room.id), room];

    return participant;
  }
}
