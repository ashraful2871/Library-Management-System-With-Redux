import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetBookByIdQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";

const ViewDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBookByIdQuery(id);
  const book = data?.data;
  console.log(book);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <Card className="w-full  mx-auto shadow-xl rounded-2xl border  ">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary">
          {book.title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          by {book.author}
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4 mt-2">
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm">Genre:</span>
          <Badge variant="secondary" className="capitalize">
            {book.genre.toLowerCase()}
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm">ISBN:</span>
          <span className="text-sm text-muted-foreground">{book.isbn}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm">Copies:</span>
          <span className="text-sm">{book.copies}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm">Available:</span>
          <Badge variant={book.available ? "default" : "destructive"}>
            {book.available ? "Yes" : "No"}
          </Badge>
        </div>
        <div>
          <span className="font-medium text-sm block mb-1">Description:</span>
          <p className="text-sm text-gray-600">{book.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ViewDetails;
