import LoginButton from "./LoginButton"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-between p-8 font-semibold text-shadow-2xs shadow-amber-300 text-xl">
      <Logo />
      <LoginButton />
    </div>
  )
}

export default Navbar