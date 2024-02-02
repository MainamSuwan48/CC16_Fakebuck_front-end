import { createBrowserRouter , RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FriendsPage from "../pages/FriendsPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/friends",
    element: <FriendsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

export default function Router() {
    return (
        <RouterProvider router={router}/>
    )
}
