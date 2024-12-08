import { Skeleton } from "@/components/ui/skeleton"
export default function QuizLoader() {
    return (
        <div className="space-y-4 mb-4">
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      )}