import React, { useState } from 'react';
import { Socket } from 'socket.io-client';

export const WssContext = React.createContext<WssContextType>({
  socket: null,
  setSocket() {},
});

const WssProvider: React.FC = ({ children }) => {
  const [socket, setSocketPrivate] = useState<WssContextType>({
    socket: null,
    setSocket(socket) {
      setSocketPrivate(state => ({
        ...state,
        socket,
      }));
    },
  });

  return <WssContext.Provider value={socket}>{children}</WssContext.Provider>;
};

export default WssProvider;

type WssContextType = {
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
};
