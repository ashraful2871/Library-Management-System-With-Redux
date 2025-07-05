import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IBorrowSummary } from "@/type";

interface IProps {
  borrowSummary: IBorrowSummary[];
}

const BorrowTable = ({ borrowSummary }: IProps) => {
  return (
    <div className="w-full overflow-x-auto rounded-md border">
      <Table className="min-w-[600px]">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Book Title</TableHead>
            <TableHead className="text-center">ISBN</TableHead>
            <TableHead className="text-center">
              Total Quantity Borrowed
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {borrowSummary.map((item) => (
            <TableRow key={item.book.isbn}>
              <TableCell className="text-center font-medium text-primary">
                {item.book.title}
              </TableCell>
              <TableCell className="text-center">{item.book.isbn}</TableCell>
              <TableCell className="text-center text-lg font-semibold">
                {item.totalQuantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BorrowTable;
