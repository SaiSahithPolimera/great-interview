import supabase from "../lib/supabase";

export const getInterviews = async () => {
  const { data: interviews, error } = await supabase
    .from("interviews")
    .select("*");
  if (error) {
    console.error(error);
    return;
  }
  return interviews;
};

