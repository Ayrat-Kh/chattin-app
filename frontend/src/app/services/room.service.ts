import { Events } from '@shared/types/room';
import io, { Socket } from 'socket.io-client';
import { config } from '../config/config';

export const connect = (): Promise<Socket> => {
  return new Promise<Socket>(resolve => {
    const { socket, fromCache } = getSocket();
    if (fromCache) {
      resolve(socket);
    }
    socket.on('connect', () => {
      console.log(`connected to: ${config.wssServer}`);
      resolve(socket);
    });
  });
};

export const createRoom = (data: { identity: string }) => {
  const { socket } = getSocket();
  socket.emit(Events.ROOM_CREATE, data);
};

export function subscribeToEvent<T>(
  event: Events,
  callback: (data: T) => void,
) {
  console.log(`subscribed to ${event}`);
  const { socket } = getSocket();
  socket.on(event, data => callback(data));
}

const getSocket = (() => {
  let socket: Socket | null = null;
  return (): { fromCache: boolean; socket: Socket } => ({
    fromCache: !socket,
    socket: socket ?? (socket = io(config.wssServer)),
  });
})();
