
import Banner from './components/atoms/Banner/Banner.jsx';
import Logo from './components/atoms/Logo/Logo.jsx';


function App() {
  
  return (
    <>
    <div className="ml-10 mt-2 mr-10">
    <header className="flex h-40 w-full bg-blue-100">
      <div className="flex w-80 shrink-0 items-center justify-center px-8">
        <Logo />
      </div>

      <div className="min-w-0 flex-1 overflow-hidden">
        <Banner />
      </div>
    </header>
    </div>
    
    </>
  )
}

export default App
