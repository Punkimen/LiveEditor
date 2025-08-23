import { Route } from '../../../routes/room/$roomId';
import { updateRoom } from '../../../shared/api/rooms.api';
import { useCodeContext } from '../../context/codeContext';

export const Header = () => {
  const { roomId } = Route.useParams();
  const { data } = useCodeContext();

  const saveRoomChange = async () => {
    if (!roomId) {
      return;
    }

    await updateRoom({
      id: roomId,
      content: data,
    }).then((res) => console.log({ res }));
  };

  return (
    <div>
      <button onClick={saveRoomChange}>Save room</button>
    </div>
  );
};
