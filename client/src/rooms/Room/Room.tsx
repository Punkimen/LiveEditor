import { getRoom } from '../../shared/api/rooms.api';
import { Route } from '../../routes/room/$roomId';
import { useQuery } from '@tanstack/react-query';
import { CodeEditor } from '../../codeEditor';
import { Chat } from '../../chat';
import s from './Room.module.css';

export const Room = () => {
  const { roomId } = Route.useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: [roomId],
    queryFn: () => getRoom(roomId),
    refetchOnMount: true,
  });

  if (isError || isLoading) {
    return isError ? 'Error' : 'Loading';
  }

  return (
    <div className={s.wrapper}>
      <CodeEditor room={data} />
      <Chat />
    </div>
  );
};
