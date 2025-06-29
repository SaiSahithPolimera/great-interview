type Options = {
  options?: string[];
  selectedOption?: string;
  setSelectedOption?: React.Dispatch<React.SetStateAction<string>>;
};

const SelectionBar = ({
  options,
  selectedOption,
  setSelectedOption,
}: Options) => {

  return (
    <div className={`md:flex flex-col items-center gap-6 hidden`}>
      <div className={`relative md:flex-row flex-col flex items-center self-center gap-4 bg-slate-800 p-1 rounded-2xl -mt-6`}>
        {options?.map((option) => (
          <div
            key={option}
            className={`px-5 p-2 cursor-pointer rounded-xl  border-slate-600 z-10 relative transition-colors duration-300 ease-in-out ${selectedOption === option
              ? 'text-white bg-slate-600/60 border-2'
              : 'text-slate-400 hover:text-white'
              }`}
            onClick={() => setSelectedOption && setSelectedOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectionBar;
