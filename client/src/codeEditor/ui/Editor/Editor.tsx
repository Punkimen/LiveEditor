import { useCodeContext } from '../../context/codeContext';
import Editor, { type OnChange } from '@monaco-editor/react';
import s from './Editor.module.css';

export const EditorScreen = () => {
  const { data, onChange } = useCodeContext();

  const onInput: OnChange = (value) => {
    onChange(value || '');
  };

  return (
    <div className={s.root}>
      <button
        onClick={() => {
          console.log(eval(data));
        }}
      >
        clcick
      </button>
      <Editor
        theme="vs-dark"
        height="100vh"
        defaultLanguage="javascript"
        onChange={onInput}
        value={data}
      />
    </div>
  );
};
