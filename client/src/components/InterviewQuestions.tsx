import { useInfiniteQuery } from "@tanstack/react-query"
import { getInterviewQuestions } from "../services/api"
import InterviewQuestionCard from "./InterviewQuestionCard"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { Loader } from "./Icons"

const InterviewQuestions = () => {

    const { data: interviewQuestions, fetchNextPage, error, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
        queryKey: ['interview_questions'],
        queryFn: getInterviewQuestions,
        initialPageParam: { cursor: 0, limit: 12 },
        getNextPageParam: (lastPage) => {
            return lastPage.nextCursor ? { cursor: lastPage.nextCursor, limit: 12 } : undefined
        }
    })

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    })

    const allInterviewQuestions = interviewQuestions?.pages.flatMap(page => page.questions);

    return (
        <div className="px-64 pb-20 flex flex-col gap-3">
            {
                allInterviewQuestions?.map((question) => <InterviewQuestionCard key={question.id} interviewQuestion={question} />)
            }
            {hasNextPage && (
                <div ref={ref} className="w-full flex justify-center py-8">
                    {isFetchingNextPage && <Loader />}
                </div>
            )}
        </div>
    )
}

export default InterviewQuestions