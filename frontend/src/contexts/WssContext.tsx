import React, { useRef } from 'react';
import { Socket } from 'socket.io-client';

export const WssContext = React.createContext<WssContextType>({
  socket: null,
  setSocket() {},
});

const WssProvider: React.FC = ({ children }) => {
  const socketData = useRef<WssContextType>({
    socket: null,
    setSocket(socket) {
      this.socket = socket;
    },
  });

  return (
    <WssContext.Provider value={socketData.current}>
      {children}
    </WssContext.Provider>
  );
};

export default WssProvider;

type WssContextType = {
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
};
