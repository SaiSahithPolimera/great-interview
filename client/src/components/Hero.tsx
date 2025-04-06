import { Link } from "react-router-dom";
import { MicIcon } from "./Icons";
import { useAuth } from "../hooks/useAuth";

const GetStartedButton = () => {
    return (
        <Link to={"/dashboard"} className="relative border-[2px] inline-flex items-center justify-center px-1.5 rounded-2xl py-1 overflow-hidden font-medium text-indigo-600 shadow-2xl group">
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#4ca1af] blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#77009f] rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#002f70] rounded-full blur-md"></span>
            </span>
            <span className="relative text-white">Get started</span>
        </Link>
    )
}


const Hero = () => {
    const { user } = useAuth();
    return (
        <div className="flex-grow-1 flex items-center flex-col gap-2 w-full justify-center">
            <div className="relative group cursor-pointer p-[1px] rounded-2xl 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                hover:from-pink-500 hover:via-green-300 hover:shadow hover:shadow-amber-300 hover:to-blue-500
                transition-all duration-500">
                <div className="relative flex items-center gap-1 p-1 rounded-2xl text-white bg-gray-900">
                    <MicIcon /> Ace your next interview
                </div>
            </div>
            <p className="text-2xl text-white font-semibold">Get familiar with real-interviews</p>
            <p className="text-sm text-slate-200 font-medium">Start your mock interview prep with the help of AI</p>
            {user && <GetStartedButton />}
        </div>
    )
}

export default Hero