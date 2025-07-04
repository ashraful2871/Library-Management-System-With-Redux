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
import { BookOpenIcon, PencilIcon, Trash2Icon, EyeIcon } from "lucide-react";
import type { IBook } from "@/type";
import { Link } from "react-router";
import { useDeleteBookMutation } from "@/redux/api/baseApi";

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  const { _id, title, author, genre, available, copies } = book;
  const [deleteBook, { isLoading }] = useDeleteBookMutation();
  interface HandleDeleteBook {
    (id: string): void;
  }

  const handleDeleteBook: HandleDeleteBook = (id) => {
    deleteBook(id);
  };
  return (
    <Card className="shadow-xl rounded-2xl border border-muted bg-white dark:bg-muted/40 transition hover:shadow-2xl">
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
      </CardContent>

      <CardFooter className="flex flex-wrap justify-between gap-2">
        <div className="flex gap-2">
          <Link to={`/books/${_id}`}>
            <Button size="sm" variant="outline">
              <EyeIcon className="w-4 h-4 mr-1" />
              View
            </Button>
          </Link>
          <Link to={`/edit-book/${_id}`}>
            <Button size="sm" variant="secondary">
              <PencilIcon className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </Link>
          <Button
            onClick={() => handleDeleteBook(_id)}
            size="sm"
            variant="destructive"
          >
            <Trash2Icon className="w-4 h-4 mr-1" />
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </div>

        <Link to={`/borrow/${_id}`}>
          <Button size="sm" disabled={!available}>
            Borrow
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
