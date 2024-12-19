import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function create(formData: FormData) {
    'use server';
    const supabase = await createClient();
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const { error } = await supabase.from('sessions').insert({
        name: name,
        description: description,
    });
    if (error) {
        console.error('Error creating workout:', error);
    }
    revalidatePath('/dashboard')
}