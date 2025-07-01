import { Tables } from "../lib/database.types"
import { companyIcons } from "./Icons";

const isURL = (text: string): URL | null => {
  let url;
  try {
    url = new URL(text);
    return url;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}



const InterviewQuestionCard = ({ interviewQuestion }: { interviewQuestion: Tables<"interview_questions"> }) => {

  const { id, company, questions } = interviewQuestion;
  ;

  const links: URL[] = [];

  const filteredQuestions = questions?.filter((question) => {
    const url = isURL(question)
    if (url) {
      links.push(url);
      return false;
    }
    return true;
  })

  if (interviewQuestion.questions?.length === 0) return;


  return (
    <div className="p-2  bg-slate-900/90 border-[1px] border-slate-700 rounded-xl">
      <div className="flex flex-col gap-2">
        {company && company?.length > 0 && <div className="flex gap-2 items-center text-white p-2 ">
          <div className="first-letter:uppercase flex items-center gap-2">
            {companyIcons[company.toLowerCase()]}
            <div className="first-letter:capitalize">{company.toLowerCase()}</div>
          </div>
        </div>
        }
        <ul className="p-2">
          {
            filteredQuestions?.map((question, index) => (
              <li className="text-start text-slate-300 first-letter:capitalize" key={id + index}>{question}</li>
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
    </div>
  )
}

export default InterviewQuestionCard;