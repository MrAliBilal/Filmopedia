import { Outlet } from "react-router"
import Footer from "../components/Footer"
import MainNavbar from "../components/MainNavbar"

const IndexLayout = () => {
  return (
    <div className="bg-black pb-4">
        <MainNavbar />
        <Outlet />
        <Footer textColor = "text-white"/>
    </div>
  )
}

export default IndexLayout