import { createClient } from "@/utils/supabase/server";
export default async function GetSessions() {
    const supabase = await createClient();
    const { error } = await supabase.from('sessions').insert({gym_name: "World Olympia"});
}