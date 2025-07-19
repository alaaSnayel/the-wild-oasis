import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://znzhernhedrengqhkazv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuemhlcm5oZWRyZW5ncWhrYXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MTg5MzQsImV4cCI6MjA2ODM5NDkzNH0.SkYBrH-yBDBE7_sg3LSRdulKDWsDqdcFQCMtkccrpSM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
