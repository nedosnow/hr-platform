import MainPage from "@/pages/main-page";
import { FC, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./router.constants";

const AddCandidatePage = lazy(() => import("@/pages/add-candidate-page"));
const CandidatesListPage = lazy(() => import("@/pages/candidates-list-page"));
const DefaultPagePage = lazy(
  () => import("@/features/default-page/default-page"),
);

const router = createBrowserRouter([
  {
    path: ROUTES.index,
    element: <MainPage />,
    children: [
      {
        path: ROUTES.index,
        element: <DefaultPagePage />,
      },
      {
        path: ROUTES.signIn,
        element: <div>authentification</div>,
      },
      {
        path: ROUTES.signUp,
        element: <div>registration</div>,
      },
      {
        path: ROUTES.addCandidate,
        element: <AddCandidatePage />,
      },
      {
        path: ROUTES.candidatesList,
        element: <CandidatesListPage />,
      },
    ],
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
