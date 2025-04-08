import { useEffect, useState } from "react"
import getInterviews from "../services/api"
import Navbar from "../components/Navbar";
import InterviewCard from "../components/InterviewCard";
import { Loader } from "../components/Icons";

const Dasboard = () => {
  const [interviews, setInterviews] = useState<{
    company: string;
    created_at: string;
    description: string;
    duration: number;
    id: number;
    interview_name: string;
    technologies: string[] | null;
  }[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    getInterviews().then((interviews) => {
      setInterviews(interviews);
    }).catch((err) => console.error(err)).finally(() => setIsLoading(false));
  }, [])

  return (
    <section className="relative overflow-scroll min-h-screen bg-slate-950"><div className="absolute flex flex-col bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />
      {
        isLoading && <div className="flex-grow flex w-full items-center justify-center"><Loader /></div>
      }
      {
        interviews &&
        <div className="grid md:grid-cols-2 p-8  w-full justify-center gap-8">
          {interviews?.map((interview) => <InterviewCard key={interview.id} interview={interview} />)}
        </div>
      }
    </div></section>
  )
}
export default Dasboard