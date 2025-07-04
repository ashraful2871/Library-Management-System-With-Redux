import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import type { IBorrowSummary } from "@/type";

const BorrowCard = ({ book, totalQuantity }: IBorrowSummary) => {
  return (
    <Card className="border border-primary/30 hover:shadow-lg transition-shadow duration-300 rounded-xl">
      <CardHeader className="pb-1">
        <CardTitle className="text-lg font-semibold text-primary">
          {book.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-2">
          ISBN: <span className="font-medium">{book.isbn}</span>
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">Total Borrowed:</span>
          <Badge variant="secondary" className="text-lg">
            {totalQuantity}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="pt-0" />
    </Card>
  );
};

export default BorrowCard;
