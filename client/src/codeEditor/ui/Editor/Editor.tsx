import { useCodeContext } from '../../context/codeContext';
import Editor, { type OnChange } from '@monaco-editor/react';
import { useEffect } from 'react';
import { useQuery } from '../../../shared/hooks/useQuery';
import { getRoom } from '../../../shared/api/rooms.api';
import s from './Editor.module.css';

export const EditorScreen = () => {
  const { data, onChange } = useCodeContext();
  const query = useQuery();
  const roomId = query.getQuery('roomid');

  const onInput: OnChange = (value) => {
    onChange(value || '');
  };

  useEffect(() => {
    if (!roomId) {
      return;
    }

    const getRoomContent = async () => {
      try {
        const res = await getRoom(roomId);
        console.log({ res });

        if (res) {
          onChange(res.content);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getRoomContent();
  }, [roomId]);

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
