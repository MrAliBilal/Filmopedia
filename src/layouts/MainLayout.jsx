import { Outlet } from 'react-router'
import NewTempNavbar from '../components/NewTempNavbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <section className='pb-8'>
    <NewTempNavbar />
    <Outlet />
    <Footer textColor = "text-white"/>
    </section>
  )
}

export default MainLayout