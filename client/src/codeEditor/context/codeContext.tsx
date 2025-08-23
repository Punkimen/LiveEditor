import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { useSocketContecxt } from '../../app/lib/socket/context';
import type { IRoom } from '../../shared/api/rooms.api';

const initData = {
  data: '',
  onChange: (val: string) => console.log(val),
};

const CodeContext = createContext(initData);

export const useCodeContext = () => {
  const context = useContext(CodeContext);

  if (!context) {
    throw new Error('Need to provide CodeContext');
  }

  return context;
};

interface IListenTextData {
  roomId: number;
  value: string;
}

export const CodeProvider = ({
  children,
  room,
}: {
  children: ReactNode;
  room: IRoom;
}) => {
  const [data, setData] = useState(room.content);
  const socket = useSocketContecxt();

  useEffect(() => {
    socket.on('listenText', (data: IListenTextData) => {
      setData(data.value);
    });
  }, []);

  const onChange = (value: string) => {
    socket.emit('listenText', { value, roomId: room.id });
  };

  return (
    <CodeContext.Provider value={{ data, onChange }}>
      {children}
    </CodeContext.Provider>
  );
};
