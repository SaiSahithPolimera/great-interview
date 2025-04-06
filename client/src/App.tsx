import { AuthProvider } from './contexts/AuthContext';
import './index.css'
import routes from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter(routes);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}