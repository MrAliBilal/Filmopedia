import { Outlet } from "react-router"
import ScrollToTop from "../components/ScrollToTop"
import IndexFooter from "../components/IndexFooter"
import IndexNavbar from "../components/IndexNavbar"

const IndexLayout = () => {
  return (
    <div className="bg-[#0B0F17] min-h-screen flex flex-col">
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