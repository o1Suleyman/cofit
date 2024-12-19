import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
        redirect("/sign-in");
    }
    return (<div className="my-2 flex"></div>)
}