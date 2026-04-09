import { Link } from "react-router-dom";

const GetStartedButton = () => {
    return (
        <div className="flex gap-4 mt-2">
            <Link to={"/dashboard"} className="relative border-[2px] inline-flex items-center justify-center px-4 rounded-xl py-2 overflow-hidden font-medium text-indigo-600 shadow-2xl group">
                <span className="absolute top-0 left-0 w-40 h-40 -mt-8 -ml-3 transition-all duration-700 bg-[#4ca1af] blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#77009f] rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#002f70] rounded-full blur-md"></span>
                </span>
                <span className="relative text-white font-semibold">Explore Experiences</span>
            </Link>
            
        </div>
    )
}

const Hero = () => {
    return (
        <div className="flex-grow-1 flex items-center flex-col gap-2 w-full justify-center animate-fade">
            <div className="relative group cursor-pointer p-[1px] rounded-2xl 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                hover:from-pink-500 hover:via-green-300 hover:shadow hover:shadow-amber-300 hover:to-blue-500
                transition-all duration-500">
                <div className="relative flex items-center gap-1 p-1 rounded-2xl text-white bg-gray-900">
                    Ace your next interview
                </div>
            </div>
            <div className="text-center md:p-2 p-6 space-y-2">
                <p className="md:text-2xl font-semibold text-white">
                    Learn from 1000+ Real interview experiences, Curated by LLMs
                </p>
                <p className="text-md text-slate-200 font-medium">
                    Explore <span className="text-white font-semibold">TLDRs</span>, strategies and more
                </p>
            </div>
            <GetStartedButton />
        </div>
    )
}

export default Hero
