import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (<div className="flex flex-col grow pt-8 gap-5 items-center">
    <h1 className="">Take the quiz and get your personalized results!</h1>
    <Button asChild>
      <Link href="/quiz">Get started</Link>
    </Button>
    <Image src="/bg.png" alt="Demo" width={1000} height={542}/>
  </div>);
}