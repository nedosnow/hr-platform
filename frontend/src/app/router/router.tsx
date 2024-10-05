import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "/registration",
    element: <div>registration</div>,
  },
  {
    path: "/authentification",
    element: <div>authentification</div>,
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
