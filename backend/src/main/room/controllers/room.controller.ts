import { Controller, Get, Post } from '@nestjs/common';
import { RoomService } from '../services/room.service';

@Controller('v1/room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  createRoom(): string {
    return this.roomService.createRoom();
  }
}
