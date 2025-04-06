import supabase from "../lib/supabase";

const getInterviews = async () => {
  const { data: interviews, error } = await supabase
    .from("interviews")
    .select("*");
  if (error) {
    console.error(error);
    return;
  }
  return interviews;
};

export default getInterviews;
