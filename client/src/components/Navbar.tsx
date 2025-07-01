import LoginButton from "./LoginButton"
import Logo from "./Logo"
import MenuBar from "./MenuBar"

type Options = {
  options?: string[];
  selectedOption?: string;
  setSelectedOption?: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = ({options, selectedOption, setSelectedOption}: Options) => {
  return (
    <div className="text-white flex items-center justify-between md:p-8 p-4 font-semibold text-shadow-2xs shadow-amber-300 text-xl">
      <Logo />
      <div className="md:block hidden">
        <LoginButton />
      </div>
      <button className="md:hidden block  cursor-pointer hover:bg-slate-800/6 rounded-lg">
        <MenuBar options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </button>
    </div>
  )
}

export default Navbar