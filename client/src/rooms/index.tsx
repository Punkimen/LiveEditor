import { useEffect } from 'react';
import { getAllRoom, createRoom } from '../shared/api/rooms.api';

export const Room = () => {
  useEffect(() => {
    const get = async () => {
      return await getAllRoom();
    };
    get().then((data) => console.log(data));
  }, []);

  return (
    <>
      <button onClick={createRoom}>click</button>
    </>
  );
};
