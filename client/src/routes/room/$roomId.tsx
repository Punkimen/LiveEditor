import { createFileRoute } from '@tanstack/react-router';
import { getRoom } from '../../shared/api/rooms.api';
import { Room } from '../../rooms/Room/Room';

export const Route = createFileRoute(`/room/$roomId`)({
  loader: ({ params }) => {
    console.log('params.roomId', params.roomId);

    return getRoom(params.roomId);
  },
  component: () => <Room />,
});
