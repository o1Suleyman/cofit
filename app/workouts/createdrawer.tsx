import { Button } from "@/components/ui/button"
import CreateWorkout from "@/app/workouts/create"
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
export default async function WorkoutsPage() {
    return (
        <Drawer>
  <DrawerTrigger asChild><Button>Start a new workout</Button></DrawerTrigger>
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