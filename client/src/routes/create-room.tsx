import { createFileRoute } from '@tanstack/react-router';
import { CreateRoomForm } from '../rooms/CreateRoomForm/CreateRoomForm';

export const Route = createFileRoute('/create-room')({
  component: () => <CreateRoomForm />,
});
