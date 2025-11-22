import { Outlet } from 'react-router'
import NewTempNavbar from '../components/NewTempNavbar'

const MainLayout = () => {
  return (
    <>
    <NewTempNavbar />
    <Outlet />
    </>
  )
}

export default MainLayout