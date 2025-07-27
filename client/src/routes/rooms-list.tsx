import { createFileRoute } from '@tanstack/react-router';
import { RoomsList } from '../rooms/RoomsList/RoomsList';

export const Route = createFileRoute('/rooms-list')({
  component: () => <RoomsList />,
});
