import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from 'next/cache'

export default async function CreateWorkout() {
    async function create(formData: FormData) {
        'use server';
        const supabase = await createClient();
        const name = formData.get("name")?.toString();
        const description = formData.get("description")?.toString();
        const gym_name = formData.get("gym_name")?.toString();
        const { data, error } = await supabase.from('sessions').insert({
            name: name,
            description: description,
            gym_name: gym_name,
        });
        if (error) {
            console.error('Error creating workout:', error);
        }
        revalidatePath('/dashboard')
    }
    return (
            <form action={create}>
                <input type="text" name="name" placeholder="Name" className="border border-gray-300 rounded px-2 py-1 w-28"/>
                <input type="text" name="description" placeholder="Description" className="border border-gray-300 rounded px-2 py-1 w-28"/>
                <input type="text" name="gym_name" placeholder="Gym Name" className="border border-gray-300 rounded px-2 py-1 w-28"/>
                <br/>
                <button type="submit">Create</button>
            </form>
    )
}