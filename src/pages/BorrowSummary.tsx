import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetBorrowBooksQuery } from "@/redux/api/baseApi";
import BorrowCard from "@/components/borrow-card/BorrowCard";
import type { IBorrowSummary } from "@/type";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowBooksQuery(undefined);
  console.log(data);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-muted-foreground">Loading borrowed books...</p>
      </div>
    );
  }

  if (isError || !data || !data.data || data.data.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-20">
        No borrowed books found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Borrowed Books Summary
      </h2>
      <ScrollArea className="h-[700px]">
        <div className="space-y-6">
          {data.data.map(
            ({ book, totalQuantity }: IBorrowSummary, index: number) => (
              <BorrowCard
                book={book}
                totalQuantity={totalQuantity}
                key={index}
              ></BorrowCard>
            )
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default BorrowSummary;
