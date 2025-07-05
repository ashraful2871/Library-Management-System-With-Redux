import { Skeleton } from "../ui/skeleton";

const BookCardSkeleton = () => {
  return (
    <div className="p-4 border rounded-xl shadow-sm space-y-3">
      <Skeleton className="h-40 w-full rounded-md" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
      <Skeleton className="h-8 w-full rounded-md" />
    </div>
  );
};

export default BookCardSkeleton;
