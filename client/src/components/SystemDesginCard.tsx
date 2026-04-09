import { useState } from "react";
import { Tables } from "../lib/database.types"
import { TickIcon, BuildingIcon, CompanyIcon } from "./Icons"
import Markdown from "marked-react";


const SystemDesginCard = ({ question }: { question: Tables<"system_design_questions"> }) => {
  const initialState = localStorage.getItem(question.id.toString());
  const [isCompleted, setIsCompleted] = useState<string | null>(initialState);

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
    return null;
  }
  
  const companyName = question.company?.trim() || "";
  const companies = companyName ? companyName.split(',').map(c => c.trim()).filter(c => c.length > 0) : [];

  return (
    <div className="p-2  bg-slate-900/90 border-[1px]  border-slate-700 cursor-pointer rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-col items-start p-2">
          {companyName && (
            <div className="flex gap-2 items-center text-white">
              <div className="flex -space-x-2 mr-1">
                  {companies.length > 0 ? (
                      companies.map((company, idx) => (
                          <div key={`${company}-${idx}`} className="relative">
                              <CompanyIcon name={company} />
                          </div>
                      ))
                  ) : (
                      <BuildingIcon />
                  )}
              </div>
              <div className="first-letter:uppercase font-medium ml-1">
                {companyName}
              </div>
            </div>
          )}
          <ul className="text-start text-slate-300  list-none flex-col gap-1">{question.question?.map((question, index) => (

            <li key={question + index.toString()} className="first-letter:capitalize text-slate-300">
              <div className="prose">
                <Markdown>
                  {question}
                </Markdown>
              </div>
            </li>))}</ul>
        </div>
        <div className="p-3" onClick={() => saveStatus(question.id)}>
          <TickIcon className={`${isCompleted === "true" ? "text-green-500" : "text-slate-400"}`} />
        </div>
      </div>
    </div >
  )
}

export default SystemDesginCard