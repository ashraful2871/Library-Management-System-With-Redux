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
import Swal from "sweetalert2";
import { useTheme } from "../theme-provider";
interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  const { _id, title, author, genre, available, copies } = book;
  const [deleteBook] = useDeleteBookMutation();
  const { theme } = useTheme();
  console.log(theme);
  interface HandleDeleteBook {
    (id: string): void;
  }

  const handleDeleteBook: HandleDeleteBook = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      background: theme === "dark" ? "#151515" : "#ffffff",
      color: theme === "dark" ? "#f9fafb" : "#111827",
      customClass: {
        confirmButton:
          "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2",
        cancelButton:
          "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
      },
      buttonsStyling: false,

      preConfirm: async () => {
        Swal.showLoading();
        try {
          const { data } = await deleteBook(id);
          return data;
        } catch (error) {
          Swal.hideLoading();
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          background: theme === "dark" ? "#151515" : "#ffffff",
          color: theme === "dark" ? "#f9fafb" : "#111827",
          customClass: {
            confirmButton:
              "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
          },
          buttonsStyling: false,
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
          background: theme === "dark" ? "#151515" : "#ffffff",
          color: theme === "dark" ? "#f9fafb" : "#111827",
          customClass: {
            confirmButton:
              "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
          },
          buttonsStyling: false,
        });
      }
    });
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
            Delete
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
