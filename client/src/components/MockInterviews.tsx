import { useQuery } from "@tanstack/react-query"
import { getMockInterviews } from "../services/api"
import { Loader } from "./Icons";
import MockInterviewCard from "./MockInterviewCard";

const MockInterviews = () => {
  const { data: interviews, error, status } = useQuery({
    queryKey: ['mock_interviews'],
    queryFn: getMockInterviews
  })

  if (status === "error") {
    return (
      <div className="text-center py-12 text-white">
        <div className="text-lg mb-2">Error loading interviews</div>
        <div className="text-sm">{error.message}</div>
      </div>
    );
  }

  if (status === "pending") {
    return (
      <div className="w-full h-64 flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="md:px-64 pb-20 p-4 flex flex-col gap-4">
      {
        interviews?.map((interivew) => (<MockInterviewCard key={interivew.session_id} interview={interivew} />))
      }
    </div>
  )
}

export default MockInterviews