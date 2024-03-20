import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./auth/pages/LoginPage";
import HomePage from "./home/pages/HomePage";
import RootLayout from "./shared/Layouts/RootLayout";
import ErrorPage from "./shared/Layouts/ErrorPage";
import AuthLayout from "./shared/Layouts/AuthLayout";
import RegistrationPage from "./auth/pages/RegistrationPage";
import UserProfile from "./User/pages/UserProfile";
import Shop from "./Shopping/pages/Shop";
import Shops from "./Shopping/pages/Shops";
import UpdateProduct from "./Shopping/pages/UpdateProduct";
import CheckoutPage from "./Shopping/pages/CheckoutPage";
import CreateProduct from "./Shopping/pages/CreateProduct";
import EventsPage from "./event/pages/EventsPage";
import CreateEvent from "./event/components/CreateEvent";
import UpdateEvent from "./event/components/UpdateEvent";
import Dashboard from "./Shopping/pages/Dashboard";
import ViewOrderDetails from "./Shopping/components/ViewOrderDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/register", element: <RegistrationPage /> },
    ],
  },
  {
    path: "/home",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/home", element: <HomePage /> },
    ],
  },
  {
    path: "/u1",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/u1/profile", element: <UserProfile /> },
    ],
  },
  {
    path: "/shops",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/shops", element: <Shops /> },
      { path: "/shops/:shopId", element: <Shop /> },
      { path: "/shops/:userID/new", element: <CreateProduct /> },
      { path: "/shops/pid", element: <UpdateProduct /> },
      { path: "/shops/:userID/checkout", element: <CheckoutPage /> },
      { path: "/shops/:shopId/dashboard", element: <Dashboard/> },
      { path: "/shops/order/:oid", element: <ViewOrderDetails/> },
    ],
  },
  {
    path: "/events",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/events", element: <EventsPage/> },
      // { path: "/events/:userId/new", element: <CreateEvent/> },
      // { path: "/events/:eventID", element: <UpdateEvent/> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
