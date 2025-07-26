import { updateRoom } from '../../../shared/api/rooms.api';
import { useQuery } from '../../../shared/hooks/useQuery';
import { useCodeContext } from '../../context/codeContext';

export const Header = () => {
  const params = useQuery();
  const { data } = useCodeContext();

  const saveRoomChange = async () => {
    const roomId = params.getQuery('roomid');
    if (!roomId) {
      return;
    }

    console.log({ data });

    const response = await updateRoom({
      id: roomId,
      content: data,
    }).then((res) => console.log({ res }));
    console.log({ response });
  };

  return (
    <div>
      <button onClick={saveRoomChange}>Save room</button>
    </div>
  );
};
