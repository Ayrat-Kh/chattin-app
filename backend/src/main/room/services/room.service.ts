import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomService {
  createRoom(): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
