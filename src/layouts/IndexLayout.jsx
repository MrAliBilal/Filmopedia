import { Outlet } from "react-router"
import IndexNavbar from "../components/IndexNavbar"

const IndexLayout = () => {
  return (
    <>
        <IndexNavbar />
        <Outlet />
    </>
  )
}

export default IndexLayout