import { connectWithWSSServer } from '@frontend/app/services/wss';
import { WssContext } from '@frontend/contexts/WssContext';
import { useCallback, useContext, useEffect, useRef } from 'react';

const useWss = ({ initialize = true }: { initialize?: boolean } = {}) => {
  const wssContext = useContext(WssContext)
  
  const reconnect = useCallback(() => {
    if (!wssContext.socket || wssContext.socket.disconnected) {
      const socket = connectWithWSSServer();
      wssContext.setSocket(socket);
    }
  }, [wssContext]);

  useEffect(() => {
    if (initialize) {
      reconnect();
    }
  }, [reconnect]);

  const funcs = useRef({  reconnect })
  return [wssContext.socket, funcs.current];
}

export default useWss;