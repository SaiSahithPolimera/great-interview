import { useState, useRef, useEffect } from 'react';

type Options = {
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  showBar?: boolean;
};

const SelectionBar = ({
  options,
  selectedOption,
  setSelectedOption,
}: Options) => {
  const [hoverPosition, setHoverPosition] = useState({ left: 0, width: 0 });
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const selectedIndex = options.indexOf(selectedOption);
    const element = optionRefs.current[selectedIndex];

    if (element) {
      const { offsetLeft, offsetWidth } = element;

      requestAnimationFrame(() => {
        setHoverPosition({ left: offsetLeft, width: offsetWidth });
      });
    }
  }, [selectedOption, options]);

  return (
    <div className="md:flex flex-col items-center w-full gap-6 hidden">
      <div className="relative text-white flex items-center self-center gap-4 bg-slate-800 p-1 rounded-2xl -mt-6">
        <div
          className="absolute bg-slate-700 border-[1px] border-slate-500 rounded-xl transition-all duration-500 ease-out"
          style={{
            left: hoverPosition.left,
            width: hoverPosition.width,
            height: '80%',
            top: '8%',
            zIndex: 0,
            transitionProperty: 'left, width',
          }}
        />

        {options.map((option,   index) => (
          <div
            key={option}
            ref={(el) => (optionRefs.current[index] = el)}
            className={`p-1 px-5 cursor-pointer rounded-xl z-10 relative transition-colors duration-300 ease-in-out ${
              selectedOption === option
                ? 'text-white'
                : 'text-slate-400 hover:text-white'
            }`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectionBar;
