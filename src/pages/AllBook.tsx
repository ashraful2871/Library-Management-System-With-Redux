import BookCard from "@/components/book-card/BookCard";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/type";

const AllBook = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  // const books = data.books;
  console.log(data);
  if (isLoading) {
    return <p>Loading......</p>;
  }

  return (
    <div>
      <h1>i am all book</h1>
      <div className="grid grid-cols-3 gap-5">
        {data.data.map((book: IBook) => (
          <BookCard book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBook;
