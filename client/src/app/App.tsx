import { SocketProvider } from './lib/socket/context';
import { CodeEditor } from '../codeEditor';
import { Chat } from '../chat';
import s from './App.module.css';
function App() {
  return (
    <>
      <SocketProvider>
        <div className={s.wrapper}>
          <CodeEditor />
          <Chat />
        </div>
      </SocketProvider>
    </>
  );
}

export default App;
