import { CodeProvider } from './context/codeContext';
import { EditorScreen } from './ui/Editor/Editor';

export const CodeEditor = () => {
  return (
    <CodeProvider>
      <EditorScreen />
    </CodeProvider>
  );
};
