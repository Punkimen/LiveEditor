import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useSocketContecxt } from '../../app/lib/socket/context';
import { useQuery } from '../../shared/hooks/useQuery';

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

export const CodeProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState('');
  const socket = useSocketContecxt();

  const query = useQuery();

  const roomId = useMemo(() => {
    return query.getQuery('roomid');
  }, []);

  useEffect(() => {
    socket.on('listenText', (data: IListenTextData) => {
      setData(data.value);
    });
  }, [query]);

  const onChange = (value: string) => {
    socket.emit('listenText', { value, roomId });
  };

  return (
    <CodeContext.Provider value={{ data, onChange }}>
      {children}
    </CodeContext.Provider>
  );
};
