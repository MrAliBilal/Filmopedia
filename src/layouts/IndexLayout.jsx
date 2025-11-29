import { Outlet } from "react-router"
import Footer from "../components/Footer"
import MainNavbar from "../components/MainNavbar"

const IndexLayout = () => {
  return (
    <div className="bg-black sm:pb-4 pb-1">
        <MainNavbar />
        <Outlet />
        <Footer textColor = "text-white"/>
    </div>
  )
}

export default IndexLayout