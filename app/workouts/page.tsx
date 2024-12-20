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
export default async function WorkoutsPage() {
    const supabase = await createClient();
    const { data, error } = await supabase.from('sessions').select('*');
    return (<div className="my-2">
        {data?.map((workout) => (
            <div key={workout.id}>
                <h2>{workout.name}</h2>
            </div>
        ))}
        <CreateWorkoutDrawer />
        </div>)
}  