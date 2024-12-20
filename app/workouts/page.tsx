import { Button } from "@/components/ui/button"
import CreateWorkoutDrawer from "@/app/workouts/createworkoutdrawer"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
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