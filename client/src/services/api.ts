import { Tables } from "../lib/database.types";
const URL = import.meta.env.VITE_BASE_URL;

type InterviewsPageResponse = {
  interviews: Tables<"interviews">[];
  nextCursor: number | null;
};

type SystemDesignQuestionResponse = {
  questions: Tables<"system_design_questions">[];
  nextCursor: number | null;
};

type InterviewQuestionsResponse = {
  questions: Tables<"interview_questions">[];
  nextCursor: number | null;
};

export const getInterviewExperiences = async ({
  pageParam,
}: {
  pageParam: { cursor: number; limit: number };
}) => {
  const { cursor, limit } = pageParam;
  const params = new URLSearchParams({
    cursor: cursor.toString(),
    limit: limit.toString(),
  });

  const res: Response = await fetch(`${URL}/api/experiences?${params}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch interviews");
  }

  const { interviews, nextCursor }: InterviewsPageResponse =
    await res.json();
  return {
    interviews,
    nextCursor,
  };
};

export const getSystemDQS = async ({
  pageParam,
}: {
  pageParam: { cursor: number; limit: number };
}) => {
  const { cursor, limit } = pageParam;
  const params = new URLSearchParams({
    cursor: cursor.toString(),
    limit: limit.toString(),
  });

  const res = await fetch(`${URL}/api/system-design?` + params, {
    method: "GET",
  });

  const { questions, nextCursor }: SystemDesignQuestionResponse =
    await res.json();

  return {
    questions,
    nextCursor,
  };
};

export const getInterviewQuestions = async ({
  pageParam,
}: {
  pageParam: { cursor: number; limit: number };
}) => {
  const { cursor, limit } = pageParam;
  const params = new URLSearchParams({
    cursor: cursor.toString(),
    limit: limit.toString(),
  });

  const res = await fetch(`${URL}/api/questions/?` + params, { method: "GET" });
  const { questions, nextCursor }: InterviewQuestionsResponse =
    await res.json();

  return {
    questions,
    nextCursor,
  };
};
