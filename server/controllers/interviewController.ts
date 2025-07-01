import supabase from "../lib/supabase.js";
import { Request, Response } from "express";

type paginationTypes = {
  limit: number;
  cursor: number;
};

const getInterviewsFromDB = async ({ limit, cursor }: paginationTypes) => {
  let query = supabase
    .from("interviews")
    .select("*", { count: "exact" })
    .order("id")
    .limit(limit);

  if (cursor) {
    query = query.gt("id", cursor);
  }

  const { data: interviews, count, error } = await query;

  const nextCursor =
    interviews?.length === limit ? interviews[interviews.length - 1].id : null;
  return { interviews, nextCursor, error, total: count };
};

const getSystemDesignQuestionsFromDB = async ({
  limit,
  cursor,
}: paginationTypes) => {
  let query = supabase
    .from("system_design_questions")
    .select()
    .order("id")
    .limit(limit);

  if (cursor) {
    query = query.gt("id", cursor);
  }

  const { data: questions, error } = await query;

  const nextCursor =
    questions?.length && questions?.length === limit
      ? questions[questions.length - 1].id
      : null;

  return {
    questions,
    nextCursor,
    error,
  };
};

const getInterviewQuestionsFromDB = async ({
  limit,
  cursor,
}: paginationTypes) => {
  let query = supabase
    .from("interview_questions")
    .select()
    .order("id")
    .limit(limit);
  if (cursor) {
    query = query.gt("id", cursor);
  }

  const { data: questions, error } = await query;

  const nextCursor =
    questions?.length === limit ? questions[questions?.length - 1].id : null;

  return {
    questions,
    nextCursor,
    error,
  };
};

const getMockInterviewsFromDB = async () => {
  const { data: interviews, error } = await supabase
    .from("mock_interviews")
    .select();
  return {
    interviews,
    error,
  };
};

export const getExperiences = async (
  req: Request,
  res: Response
): Promise<any> => {
  const limit = parseInt(req.query.limit as string) || 12;
  const cursor = parseInt(req.query.cursor as string) || 0;

  const { interviews, nextCursor, error, total } = await getInterviewsFromDB({
    limit,
    cursor,
  });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.json({
    interviews,
    nextCursor,
    total,
  });
};

export const getSystemDesignQuestions = async (
  req: Request,
  res: Response
): Promise<any> => {
  const limit = parseInt(req.query.limit as string) || 12;
  const cursor = parseInt(req.query.cursor as string) || 0;
  const { questions, error, nextCursor } = await getSystemDesignQuestionsFromDB(
    { limit, cursor }
  );
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.json({ questions, nextCursor });
};

export const getInterviewQuestions = async (
  req: Request,
  res: Response
): Promise<any> => {
  const limit = parseInt(req.query.limit as string) || 12;
  const cursor = parseInt(req.query.cursor as string) || 0;
  const { questions, error, nextCursor } = await getInterviewQuestionsFromDB({
    limit,
    cursor,
  });

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.json({ questions, nextCursor });
};

export const getMockInterviews = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { interviews, error } = await getMockInterviewsFromDB();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.json({ interviews });
};
