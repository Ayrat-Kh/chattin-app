import { Module } from '@nestjs/common';
import { RoomModule } from './main/room/room.module';

@Module({
  imports: [RoomModule],
})
export class AppModule {}
