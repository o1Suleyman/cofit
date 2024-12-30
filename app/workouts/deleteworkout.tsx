"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function DeleteWorkoutButton( {id}: { id: string } ) {
    const supabase = createClient();
    const router = useRouter();
    return (
        <Button onClick={() => {
            supabase.from('sessions').delete().eq('id', id);
            router.refresh();
        }} variant={"destructive"}>Delete</Button>
    );
}