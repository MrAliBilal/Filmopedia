import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import MainNavbar from '../components/MainNavbar'

const MainLayout = () => {
  return (
    <section className='flex flex-col'>
      <MainNavbar />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer textColor = "text-white"/>
    </section>
  )
}

export default MainLayout