import Markdown from "marked-react";
import { Tables } from "../lib/database.types"
import { TickIcon, BuildingIcon, CompanyIcon } from "./Icons";
import { useState } from "react";

const InterviewQuestionCard = ({ interviewQuestion }: { interviewQuestion: Tables<"interview_questions"> }) => {

  const { id, company, questions } = interviewQuestion;
  const initialState = localStorage.getItem(interviewQuestion.id.toString());

  const [isCompleted, setIsCompleted] = useState<string | null>(initialState);

  const links: URL[] = [];

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

  if (interviewQuestion.questions?.length === 0) return null;

  const companyName = company?.trim() || "";
  const companies = companyName ? companyName.split(',').map(c => c.trim()).filter(c => c.length > 0) : [];

  return (
    <div className="p-2 grid grid-cols-[minmax(200px,_1fr)_30px] items-start  bg-slate-900/90 border-[1px] border-slate-700 rounded-xl">
      <div className="flex flex-col gap-1">
        {companyName && (
          <div className="flex gap-2 items-center text-white p-2">
            <div className="first-letter:uppercase flex items-center gap-2">
              <div className="flex -space-x-2 mr-1">
                  {companies.length > 0 ? (
                      companies.map((c, idx) => (
                          <div key={`${c}-${idx}`} className="relative">
                              <CompanyIcon name={c} />
                          </div>
                      ))
                  ) : (
                      <BuildingIcon />
                  )}
              </div>
              <div className="first-letter:capitalize font-medium ml-1">{companyName}</div>
            </div>
          </div>
        )}
        <ul className="p-2">
          {
            questions?.map((question, index) => (
              <li className="text-slate-300 text-wrap" key={id + index}>
                {
                  <Markdown>
                    {question}
                  </Markdown>
                }

              </li>
            ))
          }
        </ul>
        {links.length > 0 &&
          <div className="p-2 flex flex-col items-start">
            <p className="p-1 rounded-lg border-[1.5px] border-slate-300 self-start text-slate-300"># Links</p>
            <ul className="p-2 flex flex-col gap-0.5 items-start">
              {
                links?.map((link) => (
                  <a className="text-blue-700" key={link.href} href={link.href}>{link.href}</a>
                ))
              }
            </ul>
          </div>
        }
      </div>
      <button className="p-1 cursor-pointer" onClick={() => saveStatus(id)}>
        <TickIcon className={`${isCompleted === "true" ? "text-green-500" : "text-slate-300"} `} />
      </button>
    </div>
  )
}

export default InterviewQuestionCard;