import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Homepage from './pages/HomePage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        path: '*',
        // element: <ErrorBoundary />,
      },
      {
        path: '/',
        element: <Homepage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
