import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { io } from 'socket.io-client';

const URL = 'http://localhost:3000/';
const socket = io(URL);

const SocketContext = createContext(socket);

export const useSocketContecxt = () => {
  const socketContext = useContext(SocketContext);
  if (!socketContext) {
    throw new Error('Need to Provide to the SocketProvider');
  }
  return socketContext;
};

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
