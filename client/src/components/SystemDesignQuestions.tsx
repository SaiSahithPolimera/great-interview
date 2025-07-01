import { useInfiniteQuery } from "@tanstack/react-query"
import { getSystemDQS } from "../services/api"
import SystemDesginCard from "./SystemDesginCard"
import { Loader } from "./Icons"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"


const SystemDesignQuestions = () => {
  const { data: questions, error, status, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['system_design_questions'],
    queryFn: getSystemDQS,
    initialPageParam: { cursor: 0, limit: 12 },
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor !== null ? { cursor: lastPage.nextCursor, limit: 12 } : undefined
    }
  })

  const { ref, inView } = useInView(
    {
      threshold: 0
    });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const allQuestions = questions?.pages.flatMap(page => page.questions);

  if (status === "error") {
    return (
      <div className="text-center py-12 text-white">
        <div className="text-lg mb-2">Error loading interviews</div>
        <div className="text-sm">{error.message}</div>
      </div>
    );
  }
  if (status === "pending" || isLoading) {
    return (
      <div className="w-full h-64 flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="md:px-64 p-4 flex flex-col gap-4">
      {
        allQuestions?.map((question) => <SystemDesginCard key={question.id} question={question} />)
      }
      {hasNextPage && (
        <div ref={ref} className="w-full flex justify-center py-8">
          {isFetchingNextPage && <Loader />}
        </div>
      )}
    </div>
  )
}

export default SystemDesignQuestions