import { Button } from "@/components/ui/button"
import CreateWorkout from "@/app/workouts/create/createworkout"
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
export default async function WorkoutsPage() {
    return (
        <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Create a new workout</DrawerTitle>
      {/* <DrawerDescription></DrawerDescription> */}
    </DrawerHeader>
    <DrawerFooter>
        <CreateWorkout />
    </DrawerFooter>
  </DrawerContent>
</Drawer>

    )
}  