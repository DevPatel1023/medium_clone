import { Outlet } from "react-router-dom"
import AppBar from "../components/AppBar"

const MainLayout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  )
}

export default MainLayout
