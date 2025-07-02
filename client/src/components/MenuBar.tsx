import { useState } from "react"
import { CloseIcon, Menu } from "./Icons";

type Options = {
  options?: string[];
  selectedOption?: string;
  setSelectedOption?: React.Dispatch<React.SetStateAction<string>>;
};

const MenuBar = ({ options, selectedOption, setSelectedOption }: Options) => {
  const [isSelected, setSelected] = useState<boolean>(false);
  return (
    <div className="hover:bg-slate-800/50 rounded-lg cursor-pointer">
      {isSelected === true ?
        <button className="cursor-pointer p-1" onClick={() => setSelected(false)}>
          <CloseIcon />
        </button> :
        <button className="cursor-pointer p-1" onClick={() => setSelected(true)}>
          <Menu />
        </button>
      }
      {isSelected &&
        <div className={`absolute flex flex-col items-start gap-3 left-0 right-0 backdrop-blur-2xl z-10 mt-2 min-h-screen transition ease-in-out duration-100 p-4`}>
          {
            <div className="flex flex-col gap-3">
              {options?.map((option) => (
                <div
                  key={option}
                  className={`p-2 flex cursor-pointe w-fit rounded-xl border-slate-600 transition-colors duration-300 text-sm ease-in-out ${selectedOption === option
                    ? 'text-white bg-slate-600/60 border-2'
                    : 'text-slate-400 hover:text-white'
                    }`}
                  onClick={() => {
                    if (setSelectedOption) {
                      setSelectedOption(option);
                      setSelected(false);
                    }
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          }
        </div>
      }
    </div>
  )
}

export default MenuBar