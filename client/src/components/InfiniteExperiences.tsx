import { useInfiniteQuery } from "@tanstack/react-query";
import { getInterviewExperiences } from "../services/api";
import { Loader } from "./Icons";
import ExperienceCard from "./ExperienceCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const InfiniteExperiences = () => {
    const {
        data,
        error,
        status,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['interviews'],
        queryFn: getInterviewExperiences,
        initialPageParam: { cursor: 0, limit: 12 },
        getNextPageParam: (lastPage) => { return lastPage.nextCursor !== null ? { cursor: lastPage.nextCursor, limit: 12 } : undefined; }
    });

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);
    
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


    const allInterviews = data?.pages.flatMap(page => page.interviews) || [];

    if (allInterviews.length === 0) {
        return (
            <div className="text-center py-12 text-slate-400">
                <div className="text-lg mb-2">No interviews found</div>
                <div className="text-sm">Check back later for new interview experiences</div>
            </div>
        );
    }

    return (
        <div className="md:px-64 pb-20 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:mt-8">
                {allInterviews.map((interview) => (
                    <ExperienceCard key={interview.id} interview={interview} />
                ))}
            </div>

            {hasNextPage && (
                <div ref={ref} className="w-full flex justify-center py-8">
                    {isFetchingNextPage && <Loader />}
                </div>
            )}
        </div>
    );
};

export default InfiniteExperiences;