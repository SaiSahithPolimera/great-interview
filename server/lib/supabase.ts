import { createClient } from "@supabase/supabase-js";
import { type Database } from "./database.types";
import * as dotenv from "dotenv";

dotenv.config();


const supabaseUrl = process.env.SUPABASE_URL;

const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
