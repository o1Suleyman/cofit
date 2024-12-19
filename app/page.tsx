import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (<div className="flex flex-col grow pt-7 gap-2 items-center mb-4">
    {/* <h1 className="">Take the quiz and get your personalized results!</h1> */}
    <Image src="/bg2.png" alt="Demo" width={820} height={525}/>
    <Button asChild>
      <Link href="/quiz">Get started</Link>
    </Button>
  </div>);
}