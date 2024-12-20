import CreateWorkoutDrawer from "@/app/workouts/createdrawer"
import { createClient } from "@/utils/supabase/server"
import Workout from "./workout";
export default async function WorkoutsPage() {
    const supabase = await createClient();
    const { data, error } = await supabase.from('sessions').select('*');
    return (<div className="my-2 flex flex-col">
        <div className="flex flex-col">{data ? data.map((workout: any) => (
            <Workout id={workout.id} key={workout.id} name={workout.name} description={workout.description} />
        )) : <p>No workouts found</p>}</div>
        <CreateWorkoutDrawer />
        </div>)
}  