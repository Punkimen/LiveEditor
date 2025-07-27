import { useEffect } from 'react';
import { createRoom, getRoom } from '../shared/api/rooms.api';
import { Route } from '../routes/room/$roomId';

export const Room = () => {
  const { roomId } = Route.useParams();

  useEffect(() => {
    const get = async () => {
      return await getRoom(roomId);
    };
    get().then((data) => console.log(data));
  }, []);

  return (
    <>
      <button onClick={createRoom}>click</button>
    </>
  );
};
