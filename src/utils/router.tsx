import { createHashRouter } from 'react-router-dom'
import App from 'src/components/App/App'
import LoginPage from 'src/pages/LoginPage/LoginPage'
import StructurePage from 'src/pages/StructurePage/StructurePage'
import SearchPage from 'src/pages/SearchPage/SearchPage'
import NotificationsPage from 'src/pages/NotificationsPage/NotificationsPage'
import ProfilePage from 'src/pages/ProfilePage/ProfilePage'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'structure',
        element: <StructurePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'notifications',
        element: <NotificationsPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
    ],
  },
])
