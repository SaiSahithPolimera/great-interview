import { useState } from "react";
import { Tables } from "../lib/database.types"
import { companyIcons, TickIcon } from "./Icons"


const SystemDesginCard = ({ question }: { question: Tables<"system_design_questions"> }) => {

  
  const company = question.company && companyIcons[question.company?.toLowerCase()] ? companyIcons[question.company?.toLowerCase()] : null;

  const initialState = localStorage.getItem(question.id.toString());

  const [isCompleted,  setIsCompleted] = useState(initialState);

  const saveStatus = (id: number) => {
    if (isCompleted == "true") {
      localStorage.setItem(id.toString(), "false");
      setIsCompleted("false");
    }
    else {
      localStorage.setItem(id.toString(), "true");
      setIsCompleted("true");
    }
  }
  
  if (!question.question?.length) {
    return;  
  }
  return (
    <div className="p-2  bg-slate-900/90 border-[1px]  border-slate-700 cursor-pointer rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-col items-start p-2">
          { company && <div className="flex gap-2 items-center text-white ">{company}
            <div className="first-letter:uppercase">
              {question?.company && question.company?.length > 0 && question.company}
            </div>
          </div>}
        <ul className="text-start text-slate-300  list-none flex-col gap-1">{question.question?.map((question, index) => (
          <li key={question + index.toString()} className="first-letter:capitalize text-slate-300">{question}</li>))}</ul>
        </div>
        <div className="p-3" onClick={() => saveStatus(question.id)}>
          <TickIcon className={`${isCompleted === "true" ? "text-green-500" : "text-slate-400"}`}/>
        </div>
      </div>
    </div>
  )
}

export default SystemDesginCard