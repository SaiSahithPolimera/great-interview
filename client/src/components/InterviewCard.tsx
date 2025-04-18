import { Link } from "react-router-dom";
import { Tables } from "../lib/database.types"
import { companyIcons } from "./Icons";

const InterviewCard = ({ interview }: { interview: Tables<"interviews"> }) => {
    return (
        <div className="text-white flex flex-col gap-2 bg-gradient-to-br from-slate-800 px-4 py-6 border-[1px] border-slate-800 via-slate-900 to-slate-950/50 rounded-2xl">
            <div className="flex items-center gap-2">
                <div className="bg-white rounded-lg p-1">{companyIcons[interview.company.toLowerCase()]}</div>
                <div>{interview.company}</div>
            </div>
            <div className="font-semibold">{interview.interview_name}</div>
            <div className="line-clamp-4 texnpm install @vapi-ai/webt-slate-300 ">{interview.description}</div>
            <div>{interview.duration}</div>
            <div className=" flex md:flex-row flex-col gap-2 justify-between w-full items-center">
                <ul className="flex gap-2 items-center text-sm">
                    {interview.technologies?.map((technology) => <li key={technology} className="bg-slate-600 line-clamp-1 rounded-lg px-2 py-1">{technology}</li>)}
                </ul>
                <Link state={{interview: interview}} to={`/interview/${interview.interview_name.split(" ").join("-").toLowerCase()}`} className="bg-slate-800 px-2 py-1 rounded-lg border-[1px] border-slate-700 hover:bg-slate-800/50 hover:border-slate-600 ease-in-out duration-75 cursor-pointer">
                    Take interview
                </Link>
            </div>
        </div>

    )
}

export default InterviewCard;