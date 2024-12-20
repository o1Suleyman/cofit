"use client";

import { Button } from "@/components/ui/button";

export default function DeleteWorkoutButton( {id, deleteAction}: { id: string, deleteAction: any } ) {
    return (
        <Button onClick={() => deleteAction(id)} variant={"destructive"}>Delete</Button>
    );
}