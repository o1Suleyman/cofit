import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { createClient } from "@/utils/supabase/server"
import DeleteWorkoutButton from "./deleteworkout";
import deleteWorkout from "./actions";
export default async function Workout( {name, description, id}: {name:string, description:string, id:string} ) {
    return (
        <Card className="m-2">
  <CardHeader>
    <CardTitle>{name}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardFooter>
  <DeleteWorkoutButton id={id} deleteAction={deleteWorkout} />
  </CardFooter>
</Card>
    )
}