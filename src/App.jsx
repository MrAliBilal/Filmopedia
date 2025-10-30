import './App.css'
import NewTempNavbar from './components/NewTempNavbar'
import TempNavbar from './components/TempNavbar'

function App() {

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background layer */}
      <div className="bg-[url('/index-bg.jpg')] bg-center bg-cover h-svh bg-no-repeat absolute inset-0 z-0">
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-[#000000a6] bg-[linear-gradient(180deg,#000_0,#0000_15%,#0000_60%,#000_90%)]" />
      </div>

      {/* Content layer - navbar and other content */}
      <div className="absolute z-50">
        <NewTempNavbar />
      </div>
      <section className='relative z-10 text-amber-50 h-[80vh] pt-16 flex flex-col items-center justify-center text-center px-4'>
                <h2 className='font-extrabold text-5xl mb-3'>Welcome.</h2>
                <h3 className='font-semibold text-4xl mb-3'>Millions of movies, TV shows and people to discover. Explore now.</h3>
                <form className='relative'>
                  <input id='temp1' className='min-w-md h-12 my-4 px-6 bg-amber-50 text-black  rounded-4xl focus:outline-none placeholder:text-center placeholder:pr-18' placeholder="Search through thousands of movies" type="text"></input>
                  <button dir="rtl" className='absolute rtl start-0 top-0 min-w-22 h-12 my-4 bg-linear-to-r from-emerald-300 to-cyan-400 text-while  rounded-4xl' type="submit" >Search</button>
                </form>
      </section>

    </div>
  )
}

export default App
