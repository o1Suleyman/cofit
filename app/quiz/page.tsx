import { createClient } from "@/utils/supabase/server";
import Quiz from "./quiz";

export default async function QuizPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return <div className="m-auto text-2xl">Please log in before taking the quiz <span className="text-3xl">↗</span></div>
    } else {
        return <div className="mt-5"><Quiz /></div>
    }
}