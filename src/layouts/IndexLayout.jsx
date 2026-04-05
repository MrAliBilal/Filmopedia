import { Outlet } from "react-router"
import ScrollToTop from "../components/ScrollToTop"
import IndexFooter from "../components/IndexFooter"
import IndexNavbar from "../components/IndexNavbar"

const IndexLayout = () => {
  return (
    <div className="bg-[#0B0F17] sm:pb-4 pb-1 min-h-screen flex flex-col">
        <ScrollToTop />
        <IndexNavbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <IndexFooter/>
    </div>
  )
}

export default IndexLayout