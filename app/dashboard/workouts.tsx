import { createClient } from "@/utils/supabase/server";

export default async function Workouts() {
    const supabase = await createClient();
    const { data, error } = await supabase.from('sessions').select('*');
    if (error) {
        console.error('Error fetching workouts:', error);
        return <div>Error fetching workouts, check console for details</div>;
    }
    return (
        <div className="space-y-4">
            {data.map((workout) => (
                <div key={workout.id}>
                    <h2>Name - {workout.name}</h2>
                    <p>Description - {workout.description}</p>
                    <p>Gym name - {workout.gym_name}</p>
                </div>
            ))}
        </div>
    );
}