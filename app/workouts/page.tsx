import CreateWorkoutDrawer from "@/app/workouts/createdrawer";
import { createClient } from "@/utils/supabase/server";
import Workout from "./workout";

export default async function WorkoutsPage() {
    const supabase = await createClient();
    const { data } = await supabase.from("sessions").select("*");

    return (
        <div className="m-2 flex flex-col">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 max-h-[75vh] overflow-y-auto">
                {data?.map((workout: any) => (
                        <Workout
                            id={workout.id}
                            key={workout.id}
                            name={workout.name}
                            description={workout.description}
                        />
                    ))}
            </div>
            <CreateWorkoutDrawer />
        </div>
    );
}