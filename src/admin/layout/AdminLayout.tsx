import { Outlet } from "react-router"

export const AdminLayout = () => {
  return (
    <div className="bg-gray-700">
        <h1>Hola mundo</h1>
        <Outlet />
    </div>
  )
}
