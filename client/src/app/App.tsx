import { SocketProvider } from './lib/socket/context';
import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
function App() {
  return (
    <>
      <SocketProvider>
        <Link to="/create-room">Создать</Link>
        <Link to="/rooms-list">Присоединиться</Link>

        <Outlet />
        <TanStackRouterDevtools />
      </SocketProvider>
    </>
  );
}

export default App;
