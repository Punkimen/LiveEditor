import type { FC } from 'react';
import type { IRoom } from '../shared/api/rooms.api';
import { CodeProvider } from './context/codeContext';
import { EditorScreen } from './ui/Editor/Editor';
import { Header } from './ui/Header/Header';

export const CodeEditor: FC<{ room?: IRoom }> = ({ room }) => {
  if (!room) {
    return 'Room is not found';
  }

  return (
    <CodeProvider room={room}>
      <div>
        <Header />
        <EditorScreen />
      </div>
    </CodeProvider>
  );
};
