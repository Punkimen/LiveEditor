import { CodeProvider } from './context/codeContext';
import { EditorScreen } from './ui/Editor/Editor';
import { Header } from './ui/Header/Header';

export const CodeEditor = () => {
  return (
    <CodeProvider>
      <Header />
      <EditorScreen />
    </CodeProvider>
  );
};
