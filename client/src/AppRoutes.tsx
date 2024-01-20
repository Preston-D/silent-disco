import { createBrowserRouter, RouterProvider } from "react-router-dom";
// HOME
import HomePage from "./home/HomePage";
import LoginPage from "./home/LoginPage";
import RegisterPage from "./home/RegisterPage";
import ErrorPage from "./home/ErrorPage";

//USER
import UsersPage from "./user/UsersPage";
import UserPage from "./user/UserPage";

// https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  // HOME
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  // USER
  {
    path: "/user",
    element: <UsersPage />,
  },
  {
    path: "/user/:id",
    element: <UserPage />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
