import { Outlet } from "react-router"
import Footer from "../components/Footer"
import MainNavbar from "../components/MainNavbar"
import ScrollToTop from "../components/ScrollToTop"

const IndexLayout = () => {
  return (
    <div className="bg-[#0B0F17] sm:pb-4 pb-1 min-h-screen flex flex-col">
        <ScrollToTop />
        <MainNavbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer textColor = "text-white"/>
    </div>
  )
}

export default IndexLayout