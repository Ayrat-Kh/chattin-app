import io from 'socket.io-client';
import { config } from '../config/config';

let socket = null

export const connectWithWSSServer = async () => {
  const socket = io(config.wssServer);
  socket.on('connect', )
}