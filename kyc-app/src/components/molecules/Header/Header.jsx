import Logo from '../../atoms/Logo/Logo.jsx'
import Banner from '../../atoms/Banner/Banner.jsx'

function Header(){


    return (
         <header className="flex h-40 w-full bg-blue-100">

            {/* Logo Section */}
            <div className="flex w-80 shrink-0 items-center justify-center px-8">
            <Logo />
            </div>

            {/* Banner Section */}
            <div className="min-w-0 flex-1 overflow-hidden">
            <Banner />
            </div>

        </header>  
    );
}

export default Header