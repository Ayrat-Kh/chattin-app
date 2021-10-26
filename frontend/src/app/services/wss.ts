import { WssTypes } from '@shared/types/wss/index';
import io, { Socket } from 'socket.io-client';
import { config } from '../config/config';

export const connectWithWSSServer = (): Socket => {
  const socket = io(config.wssServer);
  socket.on('connect', () => console.log('connected to server'));
  return socket;
};

export const createRoom = (socket: Socket, data: { identity: string }) => {
  socket.emit(WssTypes.CREATE_ROOM, data);
};
