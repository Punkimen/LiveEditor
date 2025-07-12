import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { useSocketContecxt } from '../../app/lib/socket/context';
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

export const CodeProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState('');
  const socket = useSocketContecxt();

  useEffect(() => {
    socket.on('listenText', (data) => {
      setData(data);
    });
  }, []);

  const onChange = (val: string) => {
    socket.emit('listenText', val);
  };

  return (
    <CodeContext.Provider value={{ data, onChange }}>
      {children}
    </CodeContext.Provider>
  );
};
