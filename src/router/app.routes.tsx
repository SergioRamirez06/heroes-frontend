import {
  createBrowserRouter,
  Navigate,
} from "react-router";
import { HomePage } from "../heroes/pages/home/HomePage";
import { HeroPage } from "../heroes/pages/hero/HeroPage";
import { AdminPages } from "../admin/pages/AdminPages";
import { SearchPage } from "../heroes/pages/search/SearchPage";
import { HeroesLayout } from "../heroes/layout/HeroesLayout";
import { AdminLayout } from "../admin/layout/AdminLayout";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: "heroes/:idSlug",
            element: <HeroPage />
        },
        {
            path: "search",
            element: <SearchPage />
        },
        {
          path: '*',
          element: <Navigate to="/"/>
        }

    ]
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
        {
            path: "admin",
            element: <AdminPages />
        },

    ]
  },
 

]);