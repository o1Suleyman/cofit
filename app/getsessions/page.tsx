import { createClient } from "@/utils/supabase/server";
export default async function GetSessions() {
    const supabase = await createClient();
    const { data, error } = await supabase.from("sessions").select("*");
    return <>{JSON.stringify(data)}</>;
}