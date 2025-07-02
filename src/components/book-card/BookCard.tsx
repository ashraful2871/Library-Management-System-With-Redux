import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { BookOpenIcon } from "lucide-react";
import type { IBook } from "@/type";

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  const { title, author, genre, description, available, copies, isbn } = book;

  return (
    <Card className="  shadow-xl rounded-2xl border border-muted bg-white dark:bg-muted/40">
      <CardHeader>
        <div className="flex items-start gap-3">
          <BookOpenIcon className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              by {author}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Badge variant="secondary">{genre}</Badge>
          <Badge variant={available ? "default" : "destructive"}>
            {available ? "Available" : "Not Available"}
          </Badge>
          <Badge variant="outline">Copies: {copies}</Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        <div className="text-xs text-gray-500">ISBN: {isbn}</div>
      </CardContent>

      <CardFooter className="justify-between">
        <Button variant="outline" size="sm">
          View Details
        </Button>
        <Button size="sm" disabled={!available}>
          Borrow
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
