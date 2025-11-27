import { Outlet } from "react-router"
import IndexNavbar from "../components/IndexNavbar"
import TempNavbar from "../components/TempNavbar"
import Footer from "../components/Footer"
import NewTempNavbar from "../components/NewTempNavbar"

const IndexLayout = () => {
  return (
    <div className="bg-black pb-8">
        <NewTempNavbar />
        <Outlet />
        <Footer textColor = "text-white"/>
    </div>
  )
}

export default IndexLayout