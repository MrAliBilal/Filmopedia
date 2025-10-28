import './App.css'
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
      <div className="relative z-10">
        <TempNavbar />
      </div>
      <div className='relative z-10'>
                <h2>Welcome.</h2>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
              </div>

    </div>
  )
}

export default App
