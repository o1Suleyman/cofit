import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export default async function Index() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return (<div className="flex flex-col grow pt-7 gap-2 items-center mb-4">
    {/* <h1 className="">Take the quiz and get your personalized results!</h1> */}
    <Image src="/bg2.png" alt="Demo" width={820} height={525}/>
    {!data.user ? <Button asChild>
      <Link href="/sign-up">Get started</Link>
    </Button> : <Button asChild>
      <Link href="/dashboard">Dashboard</Link></Button>}
  </div>);
}