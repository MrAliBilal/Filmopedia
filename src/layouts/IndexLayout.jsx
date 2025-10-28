import { Outlet } from "react-router"
import IndexNavbar from "../components/IndexNavbar"
import TempNavbar from "../components/TempNavbar"

const IndexLayout = () => {
  return (
    <div className="bg-black bg-cover h-dvh">
        <Outlet />
    </div>
  )
}

export default IndexLayout