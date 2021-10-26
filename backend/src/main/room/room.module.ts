import { Module } from '@nestjs/common';
import { RoomController } from './controllers/room.controller';
import { RoomService } from './services/room.service';
import { RoomGateway } from './wss/room.gateway';

@Module({
  controllers: [RoomController],
  providers: [RoomService, RoomGateway],
})
export class RoomModule {}
