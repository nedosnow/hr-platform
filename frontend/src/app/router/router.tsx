import MainPage from "@/pages/main-page";
import { FC, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./router.constants";

const AddCandidatePage = lazy(() => import("@/pages/add-candidate-page"));

const router = createBrowserRouter([
  {
    path: ROUTES.index,
    element: <MainPage />,
    children: [
      {
        path: ROUTES.signIn,
        element: <div>registration</div>,
      },
      {
        path: ROUTES.signUp,
        element: <div>authentification</div>,
      },
      {
        path: ROUTES.addCandidate,
        element: <AddCandidatePage />,
      },
    ],
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
