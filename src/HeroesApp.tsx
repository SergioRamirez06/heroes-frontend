import { RouterProvider } from "react-router"
import { AppRouter } from "./router/app.routes"

export const HeroesApp = () => {
  return (
    <>
        <RouterProvider router={AppRouter} />
    </>
  )
}
