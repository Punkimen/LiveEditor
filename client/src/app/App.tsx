import { SocketProvider } from './lib/socket/context';
import { CodeEditor } from '../codeEditor';
import { Chat } from '../chat';
import s from './App.module.css';
import { Room } from '../rooms';
function App() {
  return (
    <>
      <SocketProvider>
        <div className={s.wrapper}>
          <Room />
          <CodeEditor />
          <Chat />
        </div>
      </SocketProvider>
    </>
  );
}

export default App;
