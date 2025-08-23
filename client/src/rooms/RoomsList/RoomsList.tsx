import s from './RoomsList.module.css';
import { getAllRoom } from '../../shared/api/rooms.api';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';

export const RoomsList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['rooms'],
    queryFn: getAllRoom,
  });

  if (error || isLoading) {
    return isLoading ? 'Загрузка' : 'Ошибка';
  }

  return (
    <div>
      Rooms List
      <ul>
        {data.map((el) => {
          return (
            <li key={el.id}>
              <Link to={`/room/${el.id}`}>{el.id}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
