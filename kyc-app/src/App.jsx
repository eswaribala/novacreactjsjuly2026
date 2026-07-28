

import Banner from './components/atoms/Banner/Banner.jsx'
import Logo from './components/atoms/Logo/Logo.jsx'

function App() {
 

  return (
    <>
     <header className="flex h-40 w-full">

    {/* Logo Section */}
    <div className="flex w-80 items-center  justify-center">
      <Logo />
    </div>

    {/* Banner Section */}
    <div className="flex-1 flex items-center">
      <Banner />
    </div>

  </header>
    </>
  )
}

export default App
