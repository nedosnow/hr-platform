import MainPage from "@/pages/main-page";
import { FC, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./router.constants";

const AddCandidatePage = lazy(() => import("@/pages/add-candidate-page"));
const CandidatesListPage = lazy(() => import("@/pages/candidates-list-page"));
const DefaultPagePage = lazy(
  () => import("@/features/default-page/default-page"),
);
const SignInPage = lazy(() => import("@/pages/sign-in-page"));
const SignUpPage = lazy(() => import("@/pages/sign-up-page"));

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
        element: <SignInPage />,
      },
      {
        path: ROUTES.signUp,
        element: <SignUpPage />,
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
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
