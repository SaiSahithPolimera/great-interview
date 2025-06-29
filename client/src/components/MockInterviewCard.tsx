import { Link } from "react-router-dom"
import { Tables } from "../lib/database.types"
import { companyIcons } from "./Icons"


const MockInterviewCard = ({ interview }: { interview: Tables<"mock_interviews"> }) => {
  return (
    <div className="p-3  bg-slate-900/90 border-[1px] flex flex-col gap-2 border-slate-700 rounded-xl items-start">
      <div className="flex  gap-2 justify-between md:items-center  items-end w-full">
        <div className="flex gap-2 md:flex-row flex-col  md:items-center">
          {companyIcons[interview.company.toLowerCase()]}
          <div className="text-slate-300 text-start">{interview.title}</div>
        </div>
        <Link state={{interview}} to={`/interview/${interview.company.toLowerCase().split(" ").join("-") + interview.level}`} className="bg-slate-700 text-white px-2 py-1 cursor-pointer rounded-lg hover:bg-slate-800 ease-in-out duration-150" >Join</Link>
      </div>
    </div>
  )
}

export default MockInterviewCard