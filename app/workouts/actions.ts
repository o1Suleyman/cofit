"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export default async function deleteWorkout(id: string) {
    const supabase = await createClient();
    await supabase.from('sessions').delete().eq('id', id);
    revalidatePath('/workouts');
}
export async function createWorkout(name:string, description:string) {
    const supabase = await createClient();
    await supabase.from('sessions').insert({
        name: name,
        description: description,
    });
    revalidatePath('/workouts');
}