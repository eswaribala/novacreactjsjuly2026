import Logo from "../../atoms/Logo/Logo";
import Banner from "../../atoms/Banner/Banner";

function Header() {
    return (
        <header className="flex h-40 w-full bg-blue-100">
      <div className="flex w-80 shrink-0 items-center justify-center px-8">
        <Logo />
      </div>

      <div className="min-w-0 flex-1 overflow-hidden">
        <Banner />
      </div>
    </header>
    )
}

export default Header