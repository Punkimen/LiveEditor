import { useEffect, useState } from 'react';
import s from './RoomsList.module.css';
import { getAllRoom, getRoom } from '../../shared/api/rooms.api';

export const RoomsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const get = async () => {
      return await getAllRoom();
    };

    const getOneRoom = async () => {
      return await getRoom('cf491633-ad6a-4cf8-998f-0fe15f943bd8');
    };

    get().then((data) => setData(data));
    getOneRoom().then((data) => console.log(data));
  }, []);

  return (
    <div>
      Rooms List
      <ul>
        {data.map((el) => {
          return <li key={el.id}>{el.id}</li>;
        })}
      </ul>
    </div>
  );
};
