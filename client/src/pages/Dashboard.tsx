import InfiniteExperiences from "../components/InfiniteExperiences";
import Navbar from "../components/Navbar";
import SelectionBar from "../components/SelectionBar";
import { useState } from "react";

const Dasboard = () => {

  const options: string[] = ["Experiences", "System Design", "Questions", "Interview"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const renderContent = () => {
    switch (selectedOption) {
      case "Experiences":
        return (
          <>
              <InfiniteExperiences/>
          </>
        );

      case "System Design":
        return (
          <div className="text-center py-12 text-slate-400">
            <div className="text-6xl mb-4">🚧</div>
            <div className="text-lg mb-2">System design section coming soon</div>
            <div className="text-sm">We're working on this section.</div>
          </div>);

      case "Interview":
        return (
          <div className="text-center py-12 text-slate-400">
            <div className="text-6xl mb-4">🚧</div>
            <div className="text-lg mb-2">Interview section coming soon</div>
            <div className="text-sm">We're working on this section.</div>
          </div>
        )

      case "Questions":
        return (
          <div className="px-8 pb-20">
            <div className="text-center py-12 text-slate-400">
              <div className="text-6xl mb-4">🚧</div>
              <div className="text-lg mb-2">Questions section coming soon</div>
              <div className="text-sm">We're working on curating the best interview questions for you</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative overflow-scroll min-h-screen bg-slate-950">
      <div className="absolute flex flex-col bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <Navbar />

        {(
          <>
            <SelectionBar
              options={options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />

            {renderContent()}
          </>
        )}

        <div className="fixed w-full bottom-0 left-0 right-0 bg-slate-900 p-2">
          <p className="text-stone-300/90 text-sm text-center">
            These questions are obtained after analyzing over <strong>3000+</strong> interviews using LLMs,
            if you need any help contact us at{" "}
            <a href="mailto:support@greatinterview.com" className="text-white underline">
              support
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dasboard;