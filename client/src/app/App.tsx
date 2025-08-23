import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SocketProvider } from './lib/socket/context';
import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SocketProvider>
        <Link to="/create-room">Создать</Link>
        <Link to="/rooms-list">Присоединиться</Link>
        <Outlet />
        <TanStackRouterDevtools />
      </SocketProvider>
    </QueryClientProvider>
  );
}

export default App;
