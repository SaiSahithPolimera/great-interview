import { Tables } from "../lib/database.types";
const URL = import.meta.env.VITE_BASE_URL;

type ResponseType = {
  interviews: Tables<"interviews">[];
  nextCursor: number | null;
  total: number;
};

export const getInterviews = async ({pageParam}: {pageParam: {cursor: number, limit: number}}) => {
  const { cursor, limit } = pageParam;

  const params = new URLSearchParams({
    cursor: cursor.toString(),
    limit: limit.toString()
  })
  const res: Response = await fetch(
    `${URL}/api/experiences?${params}`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch interviews");
  }

  const { interviews, nextCursor, total }: ResponseType = await res.json();
  return {
    data: interviews,
    nextCursor,
    total,
  };
};
